console.log('--------entry_point 1_tagsearch--------------');
var searchDate = new Date();
var Searcher = Class.create({
    options: {
        tags: new Array(),
        specialtags: new Hash(),
        taglist: new Hash(),
        cat: "all",
        limit: 20,
        offset: 0,
        url: "/search/",
        order: "asc",
        searchLoader: "search-loader",
        resultContainer: "search-results",
        gmapsIcon: "http://thydzik.com/thydzikGoogleMap/markerlink.php?color=FC6355",
        itags: new Hash(),
        datePrefix: ">",
        curLng: false,
        curLat: false,
        curGeoId: false,
        info: false,
        tagTemplate: new Template('<a href="/search/#{tag}" onclick="return searcher.doRemoveTag(\'#{tag}\');" rel="tag" title="#{tag}"><span>#{tag}<i class="icon-16-delete-small tooltip float-r icon-op" title="Tag entfernen"></i></span></a>')
    },
    initialize: function(A) {
        console.log('-----------here is the first place initCalendar---------');
        var C = window.location.pathname.split("/");
        this.options.url = "/" + C[1] + "/";
        Object.extend(this.options, A || {});
        this.resultContainer = $(this.options.resultContainer);
        this.searchLoader = $(this.options.searchLoader);
        this.currentreq = null;
        this.datepicker = null;
        this.locInput = $("searchLocationInput");
        this.tagInput = $("searchMasterInput");
        this.tagList = $("tag-list");
        this.searchInputContainer = this.tagList.down("li.input-container");
        this.tagContainer = this.tagList.up("div.tags-container");
        this.tagContainer.on("click", this.tagListFocus.bindAsEventListener(this));
        this.locationPane = $("ts_location_pane");
        this.calendarPane = $("ts_date_pane");
        this.tagPane = $("ts_tag_pane");
        // this.locationSuggest = new Suggest(this.locInput, {
        //     baseUrl: "/ajax/geo/usersuggest",
        //     callBack: this.handleLocSuggest.bind(this),
        //     onEmptyClickSuggest: true,
        //     additionalStyle: "margin-left:99px;width:392px;"
        // });
        // this.tagSuggest = new Suggest(this.tagInput, {
        //     baseUrl: "/ajax/search/suggestion",
        //     ajaxOptions: {
        //         cat: this.options.cat,
        //         mode: "search"
        //     },
        //     callBack: this.handleTagSuggest.bind(this),
        //     onEmptyClickSuggest: false,
        //     additionalStyle: "top:24px; width:100px;"
        // });
        console.log('-----------here is the initCalendar---------');
        this.initCalendar();
        this.grabTags();
        var D = new Element("span", {
            "class": "icon-16-delete-small tooltip icon-op",
            id: "clearLoc",
            style: "position:absolute; top:6px; left:460px;",
            "data-orig-title": "Ort entfernen"
        });
        D.observe("click", this.clearLocation.bind(this));
        this.locInput.insert({
            after: D
        });
        if (navigator.geolocation) {
            try {
                this.geocoder = new google.maps.Geocoder()
            } catch (E) {}
            var B = new Element("span", {
                "class": "icon-24-checkin tooltip  ml icon-op",
                "data-orig-title": Szene1Translator.translate("detectMyCurrentLocation")
            });
            B.observe("click", this.getCurrentLocation.bind(this));
            D.insert({
                after: B
            })
        }
        this.tagInput.onfocus = function() {
            this.tagInputHasFocus = true
        }.bind(this);
        this.tagInput.onblur = function() {
            this.tagInputHasFocus = false
        }.bind(this);
        document.observe("keydown", this.handleEnter.bindAsEventListener(this));
        this.checkResult()
    },
    hideLocationPane: function() {
        if (this.locationPane.visible()) {
            this.locationPane.hide();
            var A = this.options.specialtags.get("location");
            if (A) {
                this.options.specialtags.unset("location");
                this.removeTag(A)
            }
        }
    },
    hideTagPane: function() {
        if (this.tagPane.visible()) {
            this.tagPane.hide();
            this.options.tags = this.options.specialtags.size() ? this.options.specialtags.values() : new Array()
        }
    },
    hideCalendarPane: function() {
        if (this.calendarPane.visible()) {
            this.calendarPane.hide();
            var A = this.options.specialtags.get("date");
            if (A) {
                this.options.specialtags.unset("date");
                this.removeTag(A)
            }
        }
    },
    showAllPanes: function() {
        this.showLocationPane();
        this.showCalendarPane();
        this.showTagPane()
    },
    hideAllPanes: function() {
        this.hideLocationPane();
        this.hideCalendarPane();
        this.hideTagPane()
    },
    showLocationPane: function() {
        if (!this.locationPane.visible()) {
            this.locationPane.show();
            this.grabTags("location")
        }
    },
    showCalendarPane: function() {
        if (!this.calendarPane.visible()) {
            this.calendarPane.show();
            this.grabTags("date")
        }
    },
    showTagPane: function() {
        if (!this.tagPane.visible()) {
            this.tagPane.show();
            this.grabTags("alltags")
        }
    },
    initCalendar: function() {
        console.log('----------there----------');
        if (this.datepicker == null) {
            if ($("cal_datepicker")) {
                console.log('----------here----------');
                this.datepicker = new UI.DatePicker({
                    callBackFunc: this.datePickCallBack.bind(this)
                })
            }
        }
        if (this.calendarPane) {
            this.calendarPane.show()
        }
    },
    datePickCallBack: function(A) {
        this.addSpecialtag("date", A);
        this.performSearch()
    },
    grabTags: function(A) {
        if (A == "date") {
            this.buildDateTag()
        } else {
            if (A == "location") {
                this.createLocationTag()
            } else {
                if (A == "alltags") {
                    this.buildTags()
                } else {
                    this.buildTags();
                    this.options.itags.each(function(B) {
                        this.addSpecialtag(B.key, B.value)
                    }.bind(this));
                    this.createLocationTag()
                }
            }
        }
    },
    buildTags: function() {
        this.tagList.select("li").each(function(A) {
            this.addTag(A.readAttribute("data-tag"), false, A)
        }.bind(this))
    },
    buildDateTag: function() {
        this.addSpecialtag("date", this.datepicker.selectedDate.strftime(this.datepicker.options.dateOutFormat))
    },
    tagListFocus: function(B) {
        var A = B.findElement();
        if (A == this.tagList || A == this.tagContainer) {
            this.tagInput.focus();
            return false
        }
    },
    handleLocSuggest: function(B, A) {
        this.locationSuggest.valueInserted = A.n1;
        this.locInput.setValue(A.n1);
        this.options.curLng = A.lng;
        this.options.curLat = A.lat;
        this.options.curGeoId = A.geolocationid;
        this.createLocationTag();
        this.performSearch()
    },
    handleTagSuggest: function(B, A) {
        this.addTag(A.n1);
        this.tagInput.setValue("");
        this.performSearch()
    },
    handleEnter: function(A) {
        if (A.keyCode == Event.KEY_RETURN) {
            if (this.tagInputHasFocus && this.tagInput.value.trim() != "") {
                this.addTag(this.tagInput.value.trim());
                this.tagInput.setValue("");
                this.performSearch();
                return
            }
        }
        return true
    },
    clearLocation: function() {
        this.locationSuggest.valueInserted = "";
        this.locInput.setValue("");
        this.options.curLng = false;
        this.options.curLat = false;
        this.options.curGeoId = false;
        var A = this.options.specialtags.get("location");
        if (A) {
            this.options.specialtags.unset("location");
            this.removeTag(A)
        }
        this.performSearch()
    },
    createLocationTag: function() {
        if (!this.locInput) {
            return
        }
        var A = this.locInput.value.trim();
        A = jQuery("<div>" + A + "</div>").text();
        this.locInput.value = A;
        if (this.options.curLng != false && this.options.curLat != false) {
            this.addSpecialtag("location", "im Umkreis von 50km von [" + this.options.curLng + "," + this.options.curLat + "," + this.options.curGeoId + "]")
        } else {
            if (A) {
                this.addSpecialtag("location", "im Umkreis von 50km von " + A)
            }
        }
    },
    eventActivity: function(D, G) {
        var C = G.readAttribute("data-event-lng");
        var F = G.readAttribute("data-event-lat");
        var B = G.readAttribute("data-event-name");
        if (!B || !C || !F) {
            return
        }
        var E = new google.maps.LatLng(F, C);
        if (!this.mymarker) {
            var A = new google.maps.Marker({
                position: E,
                map: map,
                title: B,
                icon: this.options.gmapsIcon
            });
            this.mymarker = A
        } else {
            this.mymarker.setPosition(E);
            this.mymarker.setTitle(B)
        }
        map.panTo(E)
    },
    checkResult: function() {
        if (this.options.cat == "event") {
            if (Modernizr.mq("only all and (max-width: 980px)")) {
                return
            }
            $$("div.vevent").each(function(A) {
                A.observe("mouseover", this.eventActivity.bindAsEventListener(this, A))
            }.bind(this))
        }
    },
    getMore: function() {
        var A = Loader.get("32");
        this.resultContainer.insert(A);
        this.options.offset += this.options.limit;
        this.currentreq = new Ajax.Request("/ajax/search", {
            method: "post",
            parameters: {
                tags: Object.toJSON(this.options.tags),
                cat: this.options.cat,
                limit: this.options.limit,
                offset: this.options.offset,
                order: this.options.order
            },
            onSuccess: function(B) {
                this.resultContainer.insert(B.responseJSON.content);
                if (B.responseJSON.content.startsWith("<span class=")) {
                    var C = $("search-results").next("a.button-showmore");
                    if (C) {
                        C.remove()
                    }
                }
                jQuery("img.lazy-load").unveil(300);
                if (B.responseJSON.dialog) {
                    Userprogress.dialog = UI.Dialog.fromString(B.responseJSON.dialog, {
                        modal: true,
                        hideOnClick: true,
                        drag: true
                    }).show()
                }
            }.bind(this),
            onComplete: function(B) {
                Loader.remove();
                this.checkResult();
                Util.oewaReload("search_getmore", false, true);
                Util.trackGaqEvent("Eventsuche", this.locInput.getValue(), this.options.taglist.keys())
            }.bind(this)
        });
        return false
    },
    addSpecialtag: function(C, A) {
        var D = this.options.specialtags.get(C);
        var E;
        if (C == "date" && (E = Date.create(A))) {
            A = this.options.datePrefix + A;
            this.datepicker.showDate(E)
        }
        if (D) {
            var B = this.options.tags.indexOf(D);
            if (B > -1) {
                if (A == null) {
                    this.removeTag(D)
                } else {
                    this.options.tags[B] = A;
                    this.options.specialtags.set(C, A)
                }
                return true
            }
        }
        if (A == null) {
            return false
        }
        this.options.specialtags.set(C, A);
        this.options.tags.push(A);
        return true
    },
    doAddTag: function(A) {
        this.addTag(A);
        this.performSearch();
        return false
    },
    addTag: function(A, C, B) {
        if (!A || A == "" || A == "null") {
            return false
        }
        if (this.options.tags.find(function(E) {
                return (E.toLowerCase() == A.toLowerCase())
            })) {
            return false
        }
        A = A.stripScripts().stripTags();
        if (!C) {
            if (Date.create(A.substr(1))) {
                return this.addSpecialtag("date", A.substr(1), B)
            } else {
                if (A == "upcoming" || A == "kommende" || Date.create(A)) {
                    return this.addSpecialtag("date", A, B)
                } else {
                    if (A.substr(0, 10).toLowerCase() == "im umkreis") {
                        return this.addSpecialtag("location", A, B)
                    }
                }
            }
        }
        if (!B) {
            B = new Element("li", {
                "data-tag": A
            });
            B.update(this.options.tagTemplate.evaluate({
                tag: A
            }));
            this.searchInputContainer.insert({
                before: B
            })
        }
        this.options.tags.push(A);
        try {
            this.options.taglist.set(A, B)
        } catch (D) {}
        return true
    },
    removeTag: function(A) {
        var B = this.options.tags.indexOf(A);
        if (B > -1) {
            this.options.tags = this.options.tags.without(A);
            var C = this.options.taglist.get(A);
            this.options.taglist.unset(A);
            if (C) {
                C.remove()
            }
            return true
        }
        return false
    },
    doRemoveTag: function(A) {
        this.removeTag(A);
        this.performSearch();
        return false
    },
    formSubmit: function() {
        this.addTag(this.tagInput.value);
        this.tagInput.value = "";
        this.createLocationTag();
        this.performSearch();
        return false
    },
    getUrl: function() {
        var B = "";
        if (this.options.cat != "all" && this.options.cat != "event" && this.options.cat != "location") {
            B = this.options.cat + "/"
        }
        var A = this.options.taglist.keys();
        if (this.datepicker) {
            A.push(this.datepicker.selectedDate.strftime("%Y-%m-%d"))
        }
        return this.options.url + B + A.join(";")
    },
    getCurrentLocation: function() {
        function B(C) {
            if (searcher.geocoder) {
                searcher.geocoder.geocode({
                    address: C.coords.latitude + "," + C.coords.longitude
                }, function(E, D) {
                    E.each(function(F) {
                        searcher.locationSuggest.valueInserted = F.formatted_address;
                        searcher.locInput.setValue(F.formatted_address);
                        searcher.options.curLng = C.coords.longitude;
                        searcher.options.curLat = C.coords.latitude;
                        searcher.options.curGeoId = false;
                        searcher.createLocationTag();
                        searcher.performSearch()
                    }.bind(this))
                }.bind(this));
                $("clearLoc").className = "icon-16-delete-small"
            }
        }

        function A(C) {
            unotify("Position konnte nicht ermittelt werden");
            searcher.locInput.setValue("");
            $("clearLoc").className = "icon-16-delete-small"
        }
        $("clearLoc").className = "icon-16-loading";
        navigator.geolocation.getCurrentPosition(B, A)
    },
    changeSearchCat: function(A, B) {
        this.options.cat = A;
        this.performSearch(B)
    },
    stopRequests: function() {
        if (this.currentreq) {
            this.currentreq.transport.abort()
        }
    },
    performSearch: function(A) {
        this.stopRequests();
        var B, C;
        B = {
            mode: "search",
            tags: this.options.tags,
            cat: this.options.cat
        };
        C = "Suche nach: " + this.options.tags.join(";");
        if (!A) {
            A = this.getUrl()
        }
        console.log('--------------here----------------');
        console.log('--------------B----------------', B);
        console.log('--------------C----------------', C);
        console.log('--------------A----------------', A);

        //"/index.html/2015-12-27"
        var result = A.split("/");
        searchDate  = new Date(A.substring(result[2]));
        searchDate.setHours(23);
        searchDate.setMinutes(59);
        searchDate.setSeconds(59);
            // var curDate = new Date($rootScope.eventList[i].dateTime);
            // if (lastTime.getTime() > curDate.getTime())
            // {//kch_work
            //     var kk = 0;
            // }


        // History.pushState(B, C, A);
        // Util.oewaReload("search_dosearch", false, true);
        // Util.trackGaqEvent("Eventsuche", this.locInput.getValue(), this.options.taglist.keys());
        // this.updateSearchInfo()
    },
    updateSearchInfo: function() {
        var A = $("search-params");
        var C = "ab";
        if (A) {
            if (this.options.tags.indexOf("mit fotos") > -1 || this.options.tags.indexOf("mit Fotos") > -1) {
                C = "bis"
            }
            if (this.options.info) {
                A.update(this.options.info)
            } else {
                var D = "";
                var B = "";
                if (this.locInput.getValue() != "") {
                    D = ", im Umkreis von 50km von <h2>" + this.locInput.getValue() + "</h2>"
                }
                if (this.options.taglist.keys().length > 0) {
                    B = ", Suche nach <h2>" + this.options.taglist.keys() + "</h2>"
                }
                switch (this.options.cat) {
                    case "event":
                        if (this.datepicker) {
                            A.update("Events " + C + " <h2>" + this.datepicker.centerDay.format("D. d.M.Y") + "</h2>" + D + B + ".")
                        } else {
                            A.update("Events " + C + " <h2>" + this.datepicker.centerDay.format("D. d.M.Y") + "</h2>" + D + B + ".")
                        }
                        break;
                    case "location":
                        A.update("Locations " + D + B + ".");
                        break;
                    case "group":
                        A.update("Group " + D + B + ".");
                        break;
                    default:
                        A.update("Such nach allem " + C + " <h2>" + this.datepicker.centerDay.format("D. d.M.Y") + "</h2>" + D + B + ".")
                }
            }
        }
    },
    restorePage: function() {
        var B = History.getState();
        if (!B.data.tags) {
            return false
        } else {
            for (i = 0; i < this.options.tags.length; i++) {
                found = false;
                for (j = 0; j < B.data.tags.length; j++) {
                    if (this.options.tags[i] == B.data.tags[j]) {
                        found = true;
                        break
                    }
                }
                if (!found) {
                    this.removeTag(this.options.tags[i])
                }
            }
            for (j = 0; j < B.data.tags.length; j++) {
                found = false;
                for (i = 0; i < this.options.tags.length; i++) {
                    if (this.options.tags[i] == B.data.tags[j]) {
                        found = true;
                        break
                    }
                }
                if (!found) {
                    this.addTag(B.data.tags[j])
                }
            }
            this.options.tags = B.data.tags;
            this.options.cat = B.data.cat
        }
        var A = Loader.get("32");
        this.searchLoader.update(A);
        this.options.offset = 0;
        this.updateSearchInfo();
        this.currentreq = new Ajax.Request("/ajax/search", {
            method: "post",
            parameters: {
                tags: Object.toJSON(this.options.tags),
                cat: this.options.cat,
                order: this.options.order
            },
            onSuccess: function(C) {
                this.resultContainer.update(C.responseJSON.content);
                jQuery("img.lazy-load").unveil(300);
                if (C.responseJSON.dialog) {
                    Userprogress.dialog = UI.Dialog.fromString(C.responseJSON.dialog, {
                        modal: true,
                        hideOnClick: true,
                        drag: true
                    }).show()
                }
            }.bind(this),
            onComplete: function(C) {
                Loader.remove();
                this.checkResult()
            }.bind(this)
        })
    }
});
console.log('--------entry_point 2_tagsearch--------------');
var searcher = new Searcher();
//var searcher = new Searcher();
console.log('--------entry_point 3_tagsearch--------------');
Event.observe(window, "load", function() {
    searcher.updateSearchInfo()
});
$(document).observe("dom:loaded", function() {

    console.log('-------here is the place for calling the searcher');
    // if (typeof window.tsearch != "undefined") {
    //     searcher = new Searcher(window.tsearch)
    // } else {
    //     searcher = new Searcher()
    // }
    window.document.observe("tab:selected", function(D) {
        var A = D.memo.action;
        var C = false;
        var B = new Date();
        searcher.options.order = "asc";
        switch (D.memo.action) {
            case "event_all":
                A = "event";
                searcher.showAllPanes();
                searcher.addSpecialtag("spec", null);
                searcher.options.order = "distance_date_asc";
                searcher.options.info = false;
                break;
            case "event_meetpoint":
                searcher.hideLocationPane();
                searcher.hideCalendarPane();
                searcher.showTagPane();
                searcher.addSpecialtag("spec", Config.str.uname);
                C = "/events/" + Config.str.uname;
                A = "event";
                searcher.options.info = "Events wo ich im Meetpoint eingetragen bin. Zuerst die zukünftigen, dann die vergangenen.";
                break;
            case "event_friends":
                searcher.hideAllPanes();
                searcher.addSpecialtag("spec", "von Freunden");
                A = "event";
                searcher.options.order = "distance_date_desc";
                searcher.options.info = "Events auf denen meine SZENE1-Freunde unterwegs sind. Zuerst die zukünftigen, dann die vergangenen.";
                C = "/events/von Freunden";
                break;
            case "event_freetickets":
                searcher.addSpecialtag("spec", "freikarten");
                searcher.showAllPanes();
                searcher.options.order = "distance_date_asc";
                A = "event";
                searcher.options.info = false;
                C = "/events/freikarten";
                break;
            case "location_all":
                searcher.addSpecialtag("spec", null);
                searcher.addSpecialtag("location", null);
                A = "location";
                C = "/locations/";
                searcher.options.info = false;
                break;
            case "location_friends":
                searcher.addSpecialtag("spec", "von Freunden");
                searcher.addSpecialtag("location", null);
                A = "location";
                C = "/locations/friends";
                searcher.options.info = "Locations wo Freunde im Meetpoint eingetragen sind.";
                break;
            case "location_my":
                searcher.addSpecialtag("spec", null);
                searcher.addSpecialtag("location", Config.str.uname);
                A = "location";
                C = "/locations/" + Config.str.uname;
                searcher.options.info = "Locations wo ich im Meetpoint eingetragen bin.";
                break;
            case "photo_all":
                searcher.addSpecialtag("foto", "mit fotos");
                searcher.addSpecialtag("meetpoint", null);
                searcher.addSpecialtag("spec", null);
                searcher.addSpecialtag("date", null);
                A = "event";
                searcher.options.order = "distance_date_desc";
                searcher.showAllPanes();
                searcher.options.info = false;
                break;
            case "photo_meetpoint":
                searcher.hideAllPanes();
                searcher.addSpecialtag("meetpoint", Config.str.uname);
                searcher.addSpecialtag("spec", "mit fotos");
                searcher.options.order = "distance_date_desc";
                searcher.options.info = "Events mit Fotos wo ich im Meetpoint eingetragen bin.";
                A = "event";
                C = "/photos/" + Config.str.uname;
                break;
            case "photo_friends":
                searcher.hideAllPanes();
                searcher.addSpecialtag("spec", "von Freunden");
                searcher.addSpecialtag("meetpoint", null);
                A = "event";
                searcher.options.order = "distance_date_desc";
                searcher.options.info = "Events bis <strong>" + B.format("D. d,m,Y") + "</strong>, auf denen meine SZENE1-Freunde unterwegs sind.";
                C = "/photos/von Freunden";
                break;
            case "photo_3d":
                searcher.hideAllPanes();
                searcher.addSpecialtag("meetpoint", null);
                searcher.addSpecialtag("spec", "3D-Fotos");
                searcher.addSpecialtag("foto", "mit fotos");
                searcher.options.info = "Events mit 3D-Fotos.";
                A = "event";
                C = "/photos/3D-Fotos";
                break
        }
        searcher.changeSearchCat(A, C)
    });
    History.Adapter.bind(window.document, "statechange", function(A) {
        A.stop();
        searcher.restorePage();
        return false
    })
});
if (typeof History.init !== "undefined") {
    History.init()
};

/* This software is in the public domain under CC0 1.0 Universal plus a Grant of Patent License. */
Vue.component('r-toolbar-left', {
    name: "rToolbarLeft",
    template:
        `<q-btn v-if="backState" flat round dense icon="arrow_back_ios_new" class="q-mr-sm" @click.prevent="goLastPath()"/>`//+
        // `<m-link :href="firstPath"><div class="q-mx-md q-mt-sm">` +
        // `<img src="/r/images/ResistSquare.png" alt="Home" height="32">` +
        // `</div></m-link>`
    ,
    methods: {
        goLastPath: function() {
            // console.log("goPath");
            // console.log(this);
            // console.log(this.$root.navHistoryList[1].pathWithParams)
            // console.log(this.$root.currentPath.substring(0, this.$root.currentPath.lastIndexOf("/")))
            this.$root.setUrl(this.$root.navHistoryList[1] ? this.$root.navHistoryList[1].pathWithParams : this.$root.currentPath.substring(0, this.$root.currentPath.lastIndexOf("/")));
        }
    },
    computed: {
        backState: function () {
            // console.log('menuState')
            // console.log(this)
            // console.log(this.$root.currentPath !== "/wcinternal/Message/FindMessage")
            return ["/wcinternal/Message/FindMessage",
            //    "/wcinternal/Project/ViewProject",
            //    "/wcinternal/Project/FindProjectPositions",
            //    "/wcinternal/Account/ViewAccount",
            //    "/wcinternal/Account/FindTalent",
            ].includes(this.$root.currentPath);
        },
        // firstPath: function() {
        //     // console.log("goPath");
        //     // console.log(this);
        //     // console.log(this.$root.navHistoryList[1].pathWithParams)
        //     // console.log(this.$root.currentPath.substring(0, this.$root.currentPath.lastIndexOf("/")))
        //     return this.$root.currentPath.substring(0, this.$root.currentPath.lastIndexOf("/"));
        // },
    },
});
Vue.component('r-menu', {
    name: "rMenu",
    // props: { menuItem:Object, active:Boolean },
    data: function() { return { selectedTab:"project" } },
    template:
        `<q-footer v-model="menuState" bordered class="bg-grey-1 text-black row q-pa-xs" id="footer" ref="footer">` +
        `<q-space></q-space>` +
        `<q-tabs dense v-model="activeTab" align="center">` +
        `<q-tab exact name="Project" label="Project" icon="event_note" @click.prevent="goPath('/wcinternal/Project')"></q-tab>` +
        `<q-tab exact name="Account" label="Profiles" icon="person" @click.prevent="goPath('/wcinternal/Account')"></q-tab>` +
        `<q-tab exact name="Message" label="Chat" icon="chat" @click.prevent="goPath('/wcinternal/Message')"></q-tab>` +
        `<q-tab exact name="Settings" label="Settings" icon="settings" @click.prevent="goPath('/wcinternal/Settings')"></q-tab>` +
        `</q-tabs>` +
        `<q-space></q-space>` +
        `</q-footer>`,
    methods: {
        goPath: function goPath(path) { this.$root.setUrl(path); }
    },
    computed: {
        menuState: function () {
            // console.log('menuState')
            // console.log(this)
            // console.log(this.$root.currentPath !== "/wcinternal/Message/FindMessage")
            return this.$root.currentPath !== "/wcinternal/Message/FindMessage";
        },
        activeTab: function () {
            // console.log('activeTab')
            // console.log(this.$root.currentPath.split("/")[2])
            return this.$root.currentPath.split("/") ? this.$root.currentPath.split("/")[2] : "";
        }
    },
    // mounted: function() {
    //     console.log('r-menu mounted');
    //     console.log(this);
    // }
});

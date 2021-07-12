const unsignInPage = [
  {
    name: "signIn",
    component: require("./pages/LoginPage").default,
  },
];

const signInPage = [
  {
    name: "mainpage",
    component: require("./pages/MainPage").default,
  },
  {
    name: "settings",
    component: require("./pages/Settings").default,
  },
  {
    name: "introduction",
    component: require("./pages/Introduction").default,
  },
  {
    name: "dateandtime",
    component: require("./pages/DateAndTime").default,
  },
  {
    name: "actionsheet",
    component: require("./pages/ActionSheet").default,
  },
  {
    name: "bottomsheet",
    component: require("./pages/BottomSheet").default,
  },
  {
    name: "draggableflatList",
    component: require("./pages/DraggableFlatList").default,
  },
  {
    name: "list",
    component: require("./pages/ListTest").default,
  },
  {
    name: "picker",
    component: require("./pages/DropdownPicker").default,
  },
  {
    name: "systempage",
    component: require("./pages/SystemPage").default,
  },
  {
    name: "flash",
    component: require("./pages/FlashMessage").default,
  },
  {
    name: "toast",
    component: require("./pages/ToastPage").default,
  },
  {
    name: "progress",
    component: require("./pages/ProgressPage").default,
  },
  {
    name: "imgProgress",
    component: require("./pages/ImageProgress").default,
  },
];

export { unsignInPage, signInPage };

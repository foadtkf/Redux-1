import Child from "./Pages/Child";
import ExploreMore from "./Pages/ExploreMore";
import Main from "./Pages/Main";
import ManyStates from "./Pages/ManyStates";
import MoreDeep from "./Pages/MoreDeep.Reducer";

const routes = [
  { path: "/", exact: true, name: "Main", element: Main },
  { path: "/usecontext", exact: true, name: "Use Context", element: Child },
  {
    path: "/usereducer",
    exact: true,
    name: "Use Reducer",
    element: ManyStates,
  },
  {
    path: "/usereducer2",
    exact: true,
    name: "Use Reducer Deeper",
    element: ExploreMore,
  },
  {
    path: "/usereducer3",
    exact: true,
    name: "Use Reducer Deeper 2",
    element: MoreDeep,
  },
];
export default routes;

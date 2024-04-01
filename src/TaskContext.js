import { createContext } from "react";
const taskContext = createContext({ task: [], setTask: () => {} });
export default taskContext;

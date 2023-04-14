import {TypedUseSelectorHook, useSelector} from "react-redux";
import {ApplicationState} from "src/store";

export const useAppSelector: TypedUseSelectorHook<ApplicationState> =
    useSelector;

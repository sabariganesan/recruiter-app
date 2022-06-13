import { combineReducers } from "redux"
import { feature } from "../sagas/Feature1/FeatureReducer"
import { loaderReducer } from "../sagas/Loader/LoaderReducer"

export const rootReducer = combineReducers({
    feature,
    loader: loaderReducer
})
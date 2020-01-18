import {createSelector} from 'reselect';


const selectDirectory=state=>state.directory;

export const selectDirectorySectinos=createSelector(
    [selectDirectory],
    directory=>directory.sections
)
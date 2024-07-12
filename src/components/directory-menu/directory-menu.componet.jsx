import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory-menu.styles.scss";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import { useSelector } from "react-redux";


const DirectoryMenu = () => {
    return (
        <div className="directory-menu">
            {
                useSelector(selectDirectorySections).map(({ id, ...otherSections }) => {
                    return <MenuItem key={id} {...otherSections} />
                })
            }
        </div>
    )
}

export default DirectoryMenu;
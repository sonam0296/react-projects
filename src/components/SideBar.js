import { Divider, List, ListItem, ListItemText, Toolbar } from "@mui/material";
import { SIDEBAR_CONTENT } from "../common/constants";

export const SideBar = () => {
    return (
        <>
            <Toolbar />
            < Divider />
            <List>
                {
                    SIDEBAR_CONTENT.map((sideBar, index) => (
                        <ListItem key={sideBar.id || index} >
                            <ListItemText>
                                {sideBar}
                            </ListItemText>
                        </ListItem>
                    ))
                }
            </List>
        </>
    );
};

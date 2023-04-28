import React, {Component} from 'react'
import { Themecontext } from '../context/Themecontext';


class ListItem extends Component {
   static contextType = Themecontext;
    render() { 
        const {isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div className='p-10 book-list' style={{color: theme.styntax, background:theme.bg}}>
                <ul>
                    <li style={{ background: theme.ui}}>Completing tuts</li>
                    <li style={{ background: theme.ui}}>Reading more docs</li>
                    <li style={{ background: theme.ui}}>Building projects</li>
                </ul>
            </div>
        );
    }
}
 
export default ListItem;
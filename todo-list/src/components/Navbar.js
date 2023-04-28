import React,{Component} from 'react'
import { Themecontext } from '../context/Themecontext';

class Navbar extends Component {
    static contextType = Themecontext
    render() { 
        const {isLightTheme, light, dark } = this.context
        const theme = isLightTheme ? light : dark
        return (
            <nav style={{
                background: theme.ui,
                color: theme.syntax
            }}>
            <div className="h1 text-bold text-gray-600 font-extrabold">Context-App</div>
                <ul className=' inline-block'>
                    <li className='p-2 inline-block'>Home</li>
                    <li className='p-2 inline-block'>About</li>
                    <li className='p-2 inline-block'>Contact</li>
                </ul>
            </nav>
        );
    }
}
 
export default Navbar;
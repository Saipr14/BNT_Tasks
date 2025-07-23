import { useState } from "react";

const Text = () => {
    const [text, setText] = useState('');
    return ( 
        <div className="conatiner textbox">
            <div className="textops">
                <input type="text" name="textop" className="form-control mb-3" value={text}  placeholder="Enter Something" onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="btns row">
                <button className="m-4 col-12 col-md-4 col-lg-2" onClick={() => setText(text.toUpperCase())}>UpperCase</button>
                <button className="m-4 col-12 col-md-4 col-lg-2" onClick={() => setText(text.toLowerCase())} >LowerCase</button>
                <button className="m-4 col-12 col-md-4 col-lg-2" onClick={() => {
                const capitalized = text
                    .toLowerCase()
                    .split(' ')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ');
                setText(capitalized);
                }}>Capitalize</button>

                <button className="m-4 col-12 col-md-4 col-lg-2" onClick={() => {
                const reversed = text.split('').reverse().join('');
                setText(reversed);
                }}>Reverse</button>
            </div>
        </div>
     );
}
 
export default Text;
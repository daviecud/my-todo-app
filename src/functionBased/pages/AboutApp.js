import React from "react";



const AboutApp = () => {

    const handleClick = () => {
        window.open("https://github.com/daviecud/my-todo-app");
    };

    return(
        <div className="aboutAppBody">
            
            <h2>About App</h2>

            <p>Using this app you can Create, Read, Update, and Delete items to your list (CRUD operations).</p>
            <p>To update or edit the items on your list, simply double click the item. Once you have comleted editing please press the enter key to submit.</p>
            <p>This app will persist your items in the browsers local storage. If you reload, close the app you will still have access to your todo items </p>
            <p>Please click Github button below for source files for this project.</p>
            <button onClick={handleClick}>GitHub Source Files</button>
        
        </div>
    )

}
export default AboutApp
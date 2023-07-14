const Content = () => {
    
    const handleButtonClick = ()=>{
        let textAreaValue =  document.getElementById("displayText").value;
        let paragraphText = document.getElementById('paragraph');
        paragraphText.textContent = textAreaValue;
    }
    return (
        <div>
            <textarea id="displayText"></textarea>
            <br/><br/>
            <button onClick={handleButtonClick}>Click Me!</button>
            <br/>
            <p id="paragraph"></p>
        </div>
    );
};  

export default Content;
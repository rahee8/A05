1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?<br>
Answer. getElementById - Finds the first element of HTML matching the id and returns as DOM Object.<br>
        getElementByClassName - Finds the elements of HTML matching the class name and returns as collection DOM Objects.<br>
        querySelector - 	Finds the first element of HTML that matches the CSS selector and returns as DOM Object.<br>
        querySelectorAll - Finds the elements of HTML matching the CSS selector and returns as collection DOM Objects.<br><br>

2.How do you create and insert a new element into the DOM?<br>
Answer. To create - document.createElement();<br>
        To insert - anycontainer.appendChild();<br><br>

3.What is Event Bubbling and how does it work?<br>
Answer. Event Bubbling means events goes from the innermost element to outward through its ancestors in the DOM.<br>
        It works from target element to upward ancestor elements.<br><br>

4.What is Event Delegation in JavaScript? Why is it useful?<br>
Ans. Attaching one event listener in parent instead of many event listener in child. It listens only children from that parent.<br>
      It makes code cleaner, efficient, dynamic.<br><br>

5.What is the difference between preventDefault() and stopPropagation() methods?<br>
Ans. preventDefault() - stops element's default action like submitting form.<br>
    stopPropagation() - stops bubbling so that it does not go from child to parent.<br>

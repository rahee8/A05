1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer. getElementById - Finds the first element of HTML matching the id and returns as DOM Object.
        getElementByClassName - Finds the elements of HTML matching the class name and returns as collection DOM Objects.
        querySelector - 	Finds the first element of HTML that matches the CSS selector and returns as DOM Object.
        querySelectorAll - Finds the elements of HTML matching the CSS selector and returns as collection DOM Objects.

2.How do you create and insert a new element into the DOM?
Answer. To create - document.createElement();
        To insert - anycontainer.appendChild();

3.What is Event Bubbling and how does it work?
Answer. Event Bubbling means events goes from the innermost element to outward through its ancestors in the DOM.
        It works from target element to upward ancestor elements.

4.What is Event Delegation in JavaScript? Why is it useful?
Ans. Attaching one event listener in parent instead of many event listener in child. It listens only children from that parent.
      It makes code cleaner, efficient, dynamic.

5.What is the difference between preventDefault() and stopPropagation() methods?
Ans. preventDefault() - stops element's default action like submitting form.
    stopPropagation() - stops bubbling so that it does not go from child to parent.

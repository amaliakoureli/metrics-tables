# Project structure

## Root folder
It is generally suggested, especially for applications, that there be a single root directory.
In your project, as cloned via git, the root directory is **CONTROL-AND-METRICS**, but the entire application is within the directory **metrics-table**. This gives off the idea that the entire project **CONTROL-AND-METRICS** has multiple sub-applications. If this was not intended, it is not advised.

## Root files
Assuming that the root directory should be the **metrics-table** one, since it contains most of the common root directory files, there are some that are missing.
Namely, there should also be:
* A `.gitignore` file that contains all of the directory and file paths that will not be pushed to your git repository. One such directory is the **node_modules** folder. This folder can become quite large in size, and it contains thousands of small files that ultimately bloat the repository and have no impact when someone is only inspecting your code, including yourself when you need to clone the repository anew. You can find several such file templates online.
* A code formatter configuration file, such as `prettier.config.js` file that contains the desired rules to be applied when pasting or saving your code. It requires the installation of the formatter's module, such as **prettier**, through the terminal command `npm install prettier`. It serves to format your code so that each file maintains the same code structure, ensuring readability. It is not mandatory, but heavily recommended. Similarly, you can find several configuration suggestions online that server as a starting point.

# Application structure

## Application folders
You have correctly placed all application-relevant files within the **src** directory. The **src** folder also properly contains an **assets** folder that contains relevant files. However, this structure is not common among React projects. The point of using React is to take advantage of the easy modularity it offers, in the shape of components. It is recommended that there also be several other folders within the **src** directory.

Structure example:

```
src
|-- assets
| |-- fonts  // contains all custom or downloaded fonts that are used
| |-- images  // contains all image files
| |-- styles  // contains all of the generic and global .css files used throughout the application
|-- components
| |-- layout  // contains all layout-related components (header, footer, sidebar, etc.)
| |-- shared  // contains all reusable React components
|-- views  // contains all different views that are rendered throughout the application
|-- services  // contains all of the external sources' logic used to fetch data and more (APIs and other services)
|-- utilities  // helper functions that are used thoughout the application
```

Following the above or other similar examples, you ensure that your project's structure is well-defined and divided among the different elements, becoming undestandable with only a simple glance.

## Entry point files
Files such as the **index.html** and **main.jsx** files, are typical and serve as entry points for the application. The entry points are used by servers to understand what they need to execute and load in order for the application to run or be deployed. You have correctly set the **main.jsx** file as the **src** attribute of the **index.html**'s loaded script tag.

The **index.html** file is the first file the browser tries to load. You have coded yours almost properly. One weak point is the fact that you chose to load the **Bootstrap** library through an online source, instead of installing it through `npm install bootstrap` to permanently have the library in your **node_modules** folder. You should always be careful when downloading assets from the internet, as the link may end up dead or may change, and the source may be compromised or generally unsafe.

The **App.jsx** file is typically the one that starts containing all of the logic behind the application. It is generally suggested that the **main.jsx** file should only contain the `<App>` component along with its wrapper components like a `<Provider>`, a `<ThemeWrapper>`, or other wrappers. You should avoid using the rest of the components. It is better and more common if they are rendered within your `<App>` component.

# React components

## Size
Some of your React components are unnecessarily long, in terms of lines count. This should be generally avoided. As mentioned earlier, most React components should offer a modularity to the entire codebase.

## Logic repetition
Some React components contain repetitive code that can be refactored or generalized to ensure maintainability and readability. Especially the **ControlMetrics.jsx** file is over 1000 lines long, the majority of which having repetitive code. Examples are the **toggleDropdown** functions.

## Data templating
The **ControlMetrics.jsx** file contains some state variables that contain a large dataset, which offers nothing to the logic of the component. You could, instead, extract the data to a file within the **assets** folder, and import it in the component for usage.

You could also come up with a better pattern to template these data, so that they can more effectively be iterated through with a `.map()` method within your JSX return statements and reduce the component's length and your boilerplate code.

## JSX iterations
The JSX of a React component is basically the return statements that contain HTML-like code. You correctly use the `.map()` method of several iterable entities to loop through and render multiple similar elements. The more you template the data you fetch, or use, the more iterable they become as entities, ultimately reducing the overall code size and making for a more readable component. You could benefit from data templating, as mentioned above.

# Styling

## Opting for Bootstrap
Opting for Bootstrap or any CSS framework means that they built-in class rules will be heavily used throughout the application. You have only minimally used Bootstrap classes to stylize your components, also creating custom CSS classes to further stylize them.

Since Bootstrap is a library that has quite a large functionality, it is accompanied by a large overhead (overhead is all of the code that is required for a technology/library to run, and Bootstrap is really large). It is generally okay to use Bootstrap only for its stylizing capabilities, but you have to make sure that you make use more than a handful of its classes so as not to waste the resources. The same goes for other CSS frameworks like **Tailwind**, which is much more light-weight in comparison.

You could find the definition of the Bootstrap classes that you used online, and create your own custom CSS classes to apply the same styles. This would result in a much lighter solution, providing the opportunity for you to experience CSS a bit more.

## Rulesets repetition
Similarly with your components' logic repetition, there are a few rulesets that are repeated throughout your CSS files. Since they are identical, there really is no reason to define them more than once. 

Taking into account the modularity you should adhere to when coding in React, or in general nowadays, whenever you find yourself defining the same ruleset to stylize certain components more than once, you could extract this ruleset from every CSS file and place it within a **global.css** file that contains such reusable rulesets, similar to the **/src/components/shared** folder in the application folder structure example above that contains all of the reusable React components.

# General suggestions about coding

## Write your own
It is always better, in terms of acquiring experience, to attempt to write your own code while advising online sources. This leads to bad code in the beginning, but code you can understand. Especially during the start of your coding journey, it is preferrable to take your time understanding the requirements and attempting to write something, than just attempt to implement your online findings.

## Understand what you write
It is advised that you understand what you write, especially when you use online sources and tools, before implementing it. At the start of each coding endeavour, it is **always** better to take your time to understand anything you find online by breaking down each code section, method and keyword, and finally trying to implement in the way we understand it. If you cannot code it in your own way, it is okay to use the online finding, but make sure that you research whatever is being used to develop your experience and train your memory.

## HTML, JS, CSS fundamentals
Make sure you create the bases for understanding how and why HTML, JS and CSS are written and used, before venturing into any one framework. Frameworks come and go, sometimes they come and stay for a long time. But the pillars for almost all of them are these three technologies. Understanding them gradually and finally mastering them, will enable you to tackle any existing or shiny new framework that will definitely appear.

## Present your work
Before the internship ends, you should present whatever you built to any interested party, in order to receive feedback of your work from actual users.

## Refactor your code
While your internship is coming at an end, you could store this repository to a private repository of your own, and try to refactor the code in accordance with common practices, while following as much of this review's suggestions as you see fit.

---

Best of luck!

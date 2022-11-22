const BlogHeader = `
# Deep Dive Into Open Source With GitHub
`
const Blog = `
**TL;DR**

If you are reading this blog that means you might have heard about GitHub recently or maybe not. But have you ever wondered what GitHub is and how to use it for your benefit and build communities? What is even open-source and the idea behind open-source? And many other questions. Then you are a few words away from those answers.

**What is open source?**

Open-source or Open-source software is the source code that is made accessible by the public. These are the source codes that are distributed under the terms and conditions of a license, based on this software license other users may download, update, redistribute their code to the main project or community.

**What is the need for open source?**

Previously, if a developer or engineer develops new software programs, other developers could only update the code after getting full access to the source code. There were many issues with this activity the main one was, if 2 or more programmers were working on the same file then the result would be a mixed code (this is known as conflicts), which was not suitable for both the application and the code structure.

Here comes the idea of open-source. Open-source Initiative (OSI) is a non-profit idea that was founded in 1998. After this was implemented, different developers around the world can contribute to the same project at the same time. Now the behavior of code conflicts could be handled easily.

**Benefits of open-source?**

> Open-source software could change the whole workflow of a team or organization.

Some advantages of contributing to open-source are listed below:

1. **Free To Use:** Open-source codes are free to host, download, modify, deploy. Anyone can contribute to any open-source project.
2. **Supporting Communities:** For many open-source projects, their communities are always ready to respond to your queries/issues. You get to learn many things from this community.
3. **Project Management:** Students who are not aware of how real-world software are managed and how the tasks in an organization are performed. They get to learn a lot from these open-source projects (if they are eager to contribute to open-source).
4. **Building Networks:** open-source allows contributing to project all over the world and building connections on the way.
5. **Resume Building:** open-source is very helpful to those who want to enhance their resume. This gives an edge over others who haven’t contributed to open-source projects.
   There are many benefits of open-source. In short, open-source is a vital part of the software engineering journey, developers, organizations, companies, etc.

**Open-source platforms:**

Open-source platforms are those which are used to host(upload) and manage an open-source project. These platforms provide a wide range of tasks for any project like cloning, forking, pull-requests, security, continuous integration/deployment, and many more.

One of the major open-source platforms is [**GitHub**](http://github.com). GitHub is owned by [**Microsoft**](https://www.microsoft.com) and is the most common and the most used web-based platform which depends on [**Git**](https://git-scm.com) to control versions of the software or program. There are over 55 million developers from every part of the world together who have made over 1.85 billion contributions in a total of 100+ million live repositories (projects) on GitHub. Over 70% of the companies and organization in GitHub uses it for their enterprise purpose. In other words, GitHub is the starting point of open-source contribution.

A few recent stats of GitHub are:

![""](https://cdn-images-1.medium.com/max/1024/0*jYuYEfDHW4mvl7v3)

![""](https://cdn-images-1.medium.com/max/1024/0*-Llwo2LgirlOAEeJ)

There are many other platforms for open-source projects. Some of them are [**Bitbucket**](https://bitbucket.org)**,** [**Phabricator**](https://www.phacility.com)**,** [**GitLab**](https://about.gitlab.com)**,** [**SourceForge**](https://sourceforge.net)**,** [**RhodeCode**](https://rhodecode.com), and many more.

**Get started with contribution:**

Before starting contribution you should know the basics of any technology/programming language like web, android, IOS, IoT, DSA, OS, AI/ML, JavaScript, python, C/C++, java, shell, or anything else.

These are some easy step-by-step guide to get started with open-source contribution:-

-   Download and Install [**Git**](https://git-scm.com/downloads). Now configure it using this [documentation](https://git-scm.com/docs/git-config).
-   Create an account in [**GitHub**](https://github.com).
-   Choose a project (repository) of your choice to contribute.
-   Find a feature/bug to work on. Or get started with “good-first-issue” tagged issues in that repository. Good-first-issues are beginner-friendly issues that could be used to understand the codebase at the initial stages of contributions.
-   Fork the repository — Press the top-right button, which says **Fork** in that GitHub repository.

!["Forking a repository"](https://cdn-images-1.medium.com/max/1024/0*XSZdK12oB6quAhUg)

By doing this, an exact copy of the same repository will be created in your personal GitHub account. With name \[YOUR_GITHUB_USERNAME / REPOSITORY_NAME\]

!["Forked Repository example"](https://cdn-images-1.medium.com/max/1024/0*cNTsVWGWSmMPghpz)

-   Clone Your fork.

This step is to get the forked repository on your local machine. Launch any terminal application and execute the following lines of code:

\`\`\`shell
$ git clone URL_OF_YOUR_FORKED_REPO
\`\`\`

!["Cloning a repository"](https://cdn-images-1.medium.com/max/379/0*11EfLQe6c9B9KMBD)

Like if I have forked [VS Code](https://github.com/microsoft/vscode) repository from GitHub and want to clone it then I will execute the below command:

\`\`\`shell
$ git clone https://github.com/sobhanbera/vscode
\`\`\`

Since my GitHub Username is [sobhanbera](https://github.com/sobhanbera).

-   Commit the changes.

Open the project in your favourite code editor. And update the code as it is needed. And when this is completed, execute the following command to make sure your code is saved and committed properly.

\`\`\`shell
$ git add .

$ git commit -m "first commit"
\`\`\`

-   Push the updated code to the forked repo.

Now as the codebase is saved with the new code. Let’s push (by pushing the code, we are making sure that the code also changes in the main repository) the updated code to the main project repository.

\`\`\`shell
$ git push
\`\`\`

-   Create a Pull-Request.

Move to your forked repository URL and refresh the page, You will see a prompt where it says “1 commit ahead of the main branch”.

!["Start Creating PR"](https://cdn-images-1.medium.com/max/916/0*6qx5gcgf99JiSuod)

Click the Open pull request button here.

-   Open the PR (pull request).

Click the create pull request button to complete the PR.

!["Creating a new Pull-Request"](https://cdn-images-1.medium.com/max/1024/0*YX1hRqoHRpfKgO5E)

-   **Hurray!!** You made your first open-source contribution. If your code is correct and working, the main project developers will merge the code to the main project.

!["Open Source Contribution Workflow"](https://cdn-images-1.medium.com/max/1024/0*_umROZj_emqi7DTA)

-   Meanwhile, you can discuss your code change in the main project’s Pull requests tab.
-   The final step is to **keep contributing!!**
    The important thing to note is that while you are contributing to any project, be aware to gradually get through the codebase (don’t be in hurry).

To contribute there are other ways too, like if you could not choose a project to contribute at first then create your own and then follow steps 5–7.

!["Creating a new repository"](https://cdn-images-1.medium.com/max/1024/0*EpNKBX_aqOAxAJTm)

**Major open-source projects**

There are many open-source projects which are hosted publicly on different platforms. Some major projects from GitHub are as follows:

| Projects/Repositories | Language           | Forks | Stars  | Opened Issues | Project Path                                                       |
| --------------------- | ------------------ | ----- | ------ | ------------- | ------------------------------------------------------------------ |
| Linux                 | C                  | 39265 | 119603 | 324           | [torvalds/linux](https://github.com/torvalds/linux)                |
| Neovim                | Vim Script, Lua    | 3469  | 47557  | 1504          | [neovim/neovim](https://github.com/neovim/neovim)                  |
| Kubernetes            | Go                 | 29870 | 81786  | 2626          | [kubernetes/kubernetes](https://github.com/kubernetes/kubernetes)  |
| Ansible               | Python             | 21187 | 50335  | 1566          | [ansible/ansible](https://github.com/ansible/ansible)              |
| Cassandra             | Java               | 2963  | 6907   | 485           | [apache/cassandra](https://github.com/apache/cassandra)            |
| Tensorflow            | C++, Python        | 85652 | 159874 | 3195          | [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)  |
| React                 | JavaScript         | 35594 | 176154 | 857           | [facebook/react](https://github.com/facebook/react)                |
| React Native          | JavaScript         | 21332 | 98714  | 2019          | [facebook/react-native ](https://github.com/facebook/react-native) |
| Vue                   | JavaScript         | 30414 | 189309 | 538           | [vuejs/vue](https://github.com/vuejs/vue)                          |
| jQuery                | JavaScript         | 20136 | 55476  | 84            | [jquery/jquery](https://github.com/jquery/jquery)                  |
| VS Code               | TS, JS             | 20387 | 122577 | 5698          | [microsoft/vscode](https://github.com/microsoft/vscode)            |
| TypeScript            | TypeScript         | 9832  | 74937  | 5278          | [microsoft/TypeScript](https://github.com/microsoft/TypeScript)    |
| Atom                  | JavaScript         | 16533 | 56150  | 723           | [atom/atom](https://github.com/atom/atom)                          |
| Redux                 | TS, JS             | 14911 | 56851  | 45            | [reduxjs/redux](https://github.com/reduxjs/redux)                  |
| Oh My Zsh             | Shell              | 22901 | 134666 | 630           | [ohmyzsh/ohmyzsh](https://github.com/ohmyzsh/ohmyzsh)              |

All the above projects are hosted in GitHub. There are many other projects based on every topic every language and every technology. 
*NOTE:* The data of the above repositories might have been updated depending on when you are reading this blog.

Now let’s Get Started with it!

**How to find me here:-**

Email: [sobhanbera258@gmail.com](mailto:sobhanbera258@gmail.com)

Portfolio: [sobhanbera.github.io](https://sobhanbera.github.io)

GitHub: [github.com/sobhanbera](https://github.com/sobhanbera)

>  [Deep Dive into Open Source with GitHub](https://medium.com/dsc-ghrce/open-source-by-sobhanbera-2388c07b5117) was originally published in [GDSC GHRCE](https://medium.com/dsc-ghrce) on Medium, where people are continuing the conversation by highlighting and responding to this story.
`.toString()

export default Blog
export {BlogHeader}

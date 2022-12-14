export const reset = `
    *, *::before, *::after {
        box-sizing: border-box;
    }
    * {
        margin: 0;
        padding: 0;
    }
    html, body {
        height: 100%;
        font-family: var(--ff-primary);
    }
    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }
    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }
    input, button, textarea, select {
        font: inherit;
    }
    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }
    #root, #__next {
        isolation: isolate;
    }
    ul[role='list'], ol[role='list'] {
        list-style: none;
    }
    html:focus-within {
        scroll-behavior: smooth;
    }
    a {
        color: inherit;
        text-decoration: inherit
    }
    input, button, textarea, select {
      font: inherit;
    }
    button {
        border: none;
        background: none;
        cursor: pointer;
    }
`
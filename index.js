const displaySize = {
    xs: 320,
    sm: 480,
    md: 576,
    lg: 768,
    xl: 992,
    xxl: 1200,
    xxxl: 1440,
};

const properties = [
    {
        attribute: "an",
        code: "animation-name",
    },
    {
        attribute: "and",
        code: "animation-duration",
    },
    {
        attribute: "ant",
        code: "animation-timing-function",
    },
    {
        attribute: "any",
        code: "animation-delay",
    },
    {
        attribute: "ani",
        code: "animation-iteration-count",
    },
    {
        attribute: "anr",
        code: "animation-direction",
    },
    {
        attribute: "anp",
        code: "animation-play-state",
    },
    {
        attribute: "bg",
        code: "background",
    },
    {
        attribute: "bga",
        code: "background-attachment",
    },
    {
        attribute: "bgc",
        code: "background-color",
    },
    {
        attribute: "bgi",
        code: "background-image",
    },
    {
        attribute: "bgp",
        code: "background-position",
    },
    {
        attribute: "bgr",
        code: "background-repeat",
    },
    {
        attribute: "bgl",
        code: "background-clip",
    },
    {
        attribute: "bgo",
        code: "background-origin",
    },
    {
        attribute: "bgb",
        code: "background-blend-mode",
    },
    {
        attribute: "bgs",
        code: "background-size",
    },
    {
        attribute: "bd",
        code: "border",
    },
    {
        attribute: "bdc",
        code: "border-collapse",
    },
    {
        attribute: "bdt",
        code: "border-top",
    },
    {
        attribute: "bdl",
        code: "border-left",
    },
    {
        attribute: "bdr",
        code: "border-right",
    },
    {
        attribute: "bdb",
        code: "border-bottom",
    },
    {
        attribute: "otl",
        code: "outline",
    },
    {
        attribute: "bxsh",
        code: "box-shadow",
    },
    {
        attribute: "txsh",
        code: "text-shadow",
    },
    {
        attribute: "ovf",
        code: "overflow",
    },
    {
        attribute: "opc",
        code: "opacity",
    },
    {
        attribute: "h",
        code: "height",
    },
    {
        attribute: "mxh",
        code: "max-height",
    },
    {
        attribute: "mnh",
        code: "min-height",
    },
    {
        attribute: "w",
        code: "width",
    },
    {
        attribute: "mxw",
        code: "max-width",
    },
    {
        attribute: "mnw",
        code: "min-width",
    },
    {
        attribute: "ftf",
        code: "font-family",
    },
    {
        attribute: "fts",
        code: "font-size",
    },
    {
        attribute: "ftw",
        code: "font-weight",
    },
    {
        attribute: "fty",
        code: "font-style",
    },
    {
        attribute: "ls",
        code: "list-style",
    },
    {
        attribute: "m",
        code: "margin",
    },
    {
        attribute: "mt",
        code: "margin-top",
    },
    {
        attribute: "mr",
        code: "margin-right",
    },
    {
        attribute: "ml",
        code: "margin-left",
    },
    {
        attribute: "mb",
        code: "margin-bottom",
    },
    {
        attribute: "mx",
        code: ["margin-left", "margin-right"],
    },
    {
        attribute: "my",
        code: ["margin-top", "margin-bottom"],
    },
    {
        attribute: "p",
        code: "padding",
    },
    {
        attribute: "pt",
        code: "padding-top",
    },
    {
        attribute: "pr",
        code: "padding-right",
    },
    {
        attribute: "pl",
        code: "padding-left",
    },
    {
        attribute: "pb",
        code: "padding-bottom",
    },
    {
        attribute: "px",
        code: ["padding-left", "padding-right"],
    },
    {
        attribute: "py",
        code: ["padding-top", "padding-bottom"],
    },
    {
        attribute: "pos",
        code: "position",
    },
    {
        attribute: "z",
        code: "z-index",
    },
    {
        attribute: "d",
        code: "display",
    },
    {
        attribute: "bxz",
        code: "box-sizing",
    },
    {
        attribute: "vis",
        code: "visibility",
    },
    {
        attribute: "ali",
        code: "align-items",
    },
    {
        attribute: "als",
        code: "align-self",
    },
    {
        attribute: "alc",
        code: "align-content",
    },
    {
        attribute: "jsi",
        code: "justify-items",
    },
    {
        attribute: "jss",
        code: "justify-self",
    },
    {
        attribute: "jsc",
        code: "justify-content",
    },
    {
        attribute: "acc",
        code: "accent-color",
    },
    {
        attribute: "app",
        code: "appearance",
    },
    {
        attribute: "asp",
        code: "aspect-ratio",
    },
    {
        attribute: "bdf",
        code: "backdrop-filter",
    },
    {
        attribute: "bt",
        code: "bottom",
    },
    {
        attribute: "crt",
        code: "caret-color",
    },
    {
        attribute: "clp",
        code: "clip-path",
    },
    {
        attribute: "cl",
        code: "color",
    },
    {
        attribute: "colc",
        code: "column-count",
    },
    {
        attribute: "colw",
        code: "column-width",
    },
    {
        attribute: "colf",
        code: "column-fill",
    },
    {
        attribute: "colg",
        code: "column-gap",
    },
    {
        attribute: "colr",
        code: "column-rule",
    },
    {
        attribute: "colp",
        code: "column-span",
    },
    {
        attribute: "flt",
        code: "filter",
    },
    {
        attribute: "flx",
        code: "flex",
    },
    {
        attribute: "flxd",
        code: "flex-direction",
    },
    {
        attribute: "flxw",
        code: "flex-wrap",
    },
    {
        attribute: "ga",
        code: "grid-area",
    },
    {
        attribute: "gac",
        code: "grid-auto-columns",
    },
    {
        attribute: "gaf",
        code: "grid-auto-flow",
    },
    {
        attribute: "gar",
        code: "grid-auto-rows",
    },
    {
        attribute: "gc",
        code: "grid-column",
    },
    {
        attribute: "gr",
        code: "grid-row",
    },
    {
        attribute: "fl",
        code: "float",
    },
    {
        attribute: "gta",
        code: "grid-template-areas",
    },
    {
        attribute: "gtc",
        code: "grid-template-columns",
    },
    {
        attribute: "gtr",
        code: "grid-template-rows",
    },
    {
        attribute: "ins",
        code: "inset",
    },
    {
        attribute: "plc",
        code: "place-content",
    },
    {
        attribute: "pli",
        code: "place-items",
    },
    {
        attribute: "pls",
        code: "place-self",
    },
    {
        attribute: "rsz",
        code: "resize",
    },
    {
        attribute: "rot",
        code: "rotate",
    },
    {
        attribute: "g",
        code: "gap",
    },
    {
        attribute: "scl",
        code: "scale",
    },
    {
        attribute: "txa",
        code: "text-align",
    },
    {
        attribute: "txw",
        code: "text-wrap",
    },
    {
        attribute: "txt",
        code: "text-transform",
    },
    {
        attribute: "txd",
        code: "text-decoration",
    },
    {
        attribute: "txs",
        code: "text-decoration-skip-ink",
    },
    {
        attribute: "txi",
        code: "text-indent",
    },
    {
        attribute: "tf",
        code: "transform",
    },
    {
        attribute: "tfs",
        code: "transform-style",
    },
    {
        attribute: "tfo",
        code: "transform-origin",
    },
    {
        attribute: "ts",
        code: "transition",
    },
    {
        attribute: "tsd",
        code: "transition-delay",
    },
    {
        attribute: "tsu",
        code: "transition-duration",
    },
    {
        attribute: "tsp",
        code: "transition-property",
    },
    {
        attribute: "tst",
        code: "transition-timing-function",
    },
    {
        attribute: "tl",
        code: "translate",
    },
    {
        attribute: "us",
        code: "user-select",
    },
    {
        attribute: "va",
        code: "vertical-align",
    },
    {
        attribute: "whs",
        code: "white-space",
    },
    {
        attribute: "wb",
        code: "word-break",
    },
    {
        attribute: "ws",
        code: "word-spacing",
    },
    {
        attribute: "tp",
        code: "top",
    },
    {
        attribute: "lt",
        code: "left",
    },
    {
        attribute: "rt",
        code: "right",
    },
    {
        attribute: "lh",
        code: "line-height",
    },
    {
        attribute: "lts",
        code: "letter-spacing",
    },
    {
        attribute: "cur",
        code: "cursor",
    },
    {
        attribute: "or",
        code: "order",
    }
]

function displayError(errorTitle, attribute, surroundingElements) {
    const errorDisplay = document.createElement('div');
    Object.assign(errorDisplay.style, {
        top: '0',
        left: '0',
        width: '100%',
        padding: '25px',
        height: '100dvh',
        position: 'fixed',
        backgroundColor: '#ffffff',
        zIndex: '9999',
    });

    // Create error box
    const errorBox = document.createElement('div');
    errorBox.classList.add('error');

    // Error message
    errorBox.innerHTML = `
        <p class="error-title" style="margin: 15px 0; font-size: 18px; color: #ff0033; font-family: 'Source Code Pro', monospace;">
            <b>Error:</b> ${errorTitle}
        </p>
    `;

    const errorContent = document.createElement('div');
    Object.assign(errorContent.style, {
        width: '100%',
        height: '100%',
        borderRadius: '6px',
        padding: '15px 10px',
        backgroundColor: '#ffcccc',
    });

    surroundingElements.forEach(element => {
        const errorItem = document.createElement('div');
        errorItem.classList.add('error-item');

        let attributesString = '';
        Array.from(element.attributes).forEach(attr => {
            attributesString += ` ${attr.name}="${attr.value}"`;
        });

        const preElement = document.createElement("pre")
        Object.assign(preElement.style, {
            margin: '10px 0',
            fontSize: '15px',
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word',
            fontFamily: 'Source Code Pro, monospace',
            textDecorationLine: element.attributes[attribute] ? 'spelling-error' : '',
        });

        preElement.innerHTML += `&lt;${element.tagName.toLowerCase()}${attributesString}&gt;${element.textContent}&lt;/${element.tagName.toLowerCase()}&gt;`


        errorItem.appendChild(preElement);
        errorContent.appendChild(errorItem);
    });

    errorBox.appendChild(errorContent);
    errorDisplay.appendChild(errorBox);
    document.body.appendChild(errorDisplay);
}

let allElementsCache = null;

function applyStyles() {
    if (!allElementsCache) {
        const att = properties.map(({ attribute }) => `[${attribute}]`).join(",");
        allElementsCache = document.querySelectorAll(att);
    }

    const currentWidth = window.innerWidth;

    const batchSize = 100;

    let index = 0;

    function processBatch() {
        const batch = Array.from(allElementsCache).slice(index, index + batchSize);

        batch.forEach((element) => {
            const attributeMap = Object.fromEntries(
                Array.from(element.attributes).map(({ name, value }) => [name, value])
            );

            properties.forEach(({ attribute, code }) => {
                let appliedValue = attributeMap[attribute] || '';

                Object.keys(displaySize).forEach((size) => {
                    const sizeAttrValue = attributeMap[`${attribute}-${size}`];
                    if (currentWidth >= displaySize[size] && sizeAttrValue) {
                        appliedValue = sizeAttrValue;
                    }
                });

                if (appliedValue) {
                    if (Array.isArray(code)) {
                        code.forEach((subProperty) => CSS.supports(code, appliedValue) ? element.style[subProperty] = appliedValue
                            : displayError(`<b>${attribute}</b> attribute is not assigned the value <b>${appliedValue}</b>`, attribute, [element])
                        );
                    } else {
                        CSS.supports(code, appliedValue) ? element.style[code] = appliedValue
                            : displayError(`<b>${attribute}</b> attribute is not assigned the value <b>${appliedValue}</b>`, attribute, [element])
                    }
                }
            });

        });

        index += batchSize;

        if (index < allElementsCache.length) {
            requestAnimationFrame(processBatch);
        }
    }

    requestAnimationFrame(processBatch);
}

applyStyles();

window.addEventListener("resize", applyStyles);
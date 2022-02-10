"use strict";
exports.id = 718;
exports.ids = [718];
exports.modules = {

/***/ 718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChatPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(704);
/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(181);
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(885);
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);






const SUPABASE_URL = 'https://sorexwekduheaphbaste.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0Mzk4OTkwMSwiZXhwIjoxOTU5NTY1OTAxfQ.wlsa4lsvscYYMDHNkHYAkHO6KRwvNfILgscedWFDjEE';
const SUPABASE_CLIENT = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__.createClient)(SUPABASE_URL, SUPABASE_ANON_KEY);
function ChatPage() {
    const roteamento = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const usuarioLogado = roteamento.query.username;
    const [mensagem1, setMensagem] = react__WEBPACK_IMPORTED_MODULE_2___default().useState('');
    const [listaMensagens, SetListaMensagens] = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]);
    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{
        SUPABASE_CLIENT.from('mensagens').select('*').order('id', {
            ascending: false
        }).then(({ data  })=>{
            SetListaMensagens(data);
        });
    }, []);
    function handleNovaMensagem(novaMensagem) {
        {
            if (novaMensagem != '' && novaMensagem != ' ' && novaMensagem != '  ') {
                const mensagem = {
                    de: usuarioLogado,
                    texto: novaMensagem
                };
                SUPABASE_CLIENT.from('mensagens').insert([
                    mensagem
                ]).then(({ data  })=>{
                    SetListaMensagens([
                        data[0],
                        ...listaMensagens
                    ]);
                });
                setMensagem('');
            } else {
                setMensagem('');
            }
        }
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {
        styleSheet: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__/* .theme.colors.primary[500] */ .r.O.T.pl,
            backgroundColor: '#282C34',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundBlendMode: 'multiply',
            color: _config_json__WEBPACK_IMPORTED_MODULE_3__/* .theme.colors.neutrals["000"] */ .r.O.O.M6
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {
            styleSheet: {
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                borderRadius: '5px',
                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__/* .theme.colors.neutrals[700] */ .r.O.O.qy,
                height: '100%',
                maxWidth: '95%',
                maxHeight: '95vh',
                padding: '32px'
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    styleSheet: {
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        height: '80%',
                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__/* .theme.colors.neutrals[900] */ .r.O.O.H,
                        flexDirection: 'column',
                        borderRadius: '5px',
                        border: '1px solid',
                        borderColor: _config_json__WEBPACK_IMPORTED_MODULE_3__/* .theme.colors.primary[500] */ .r.O.T.pl,
                        padding: '16px'
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MessageList, {
                            mensagem: listaMensagens
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            as: "form",
                            styleSheet: {
                                display: 'flex',
                                alignItems: 'center'
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {
                                    value: mensagem1,
                                    onChange: (event)=>{
                                        const valor = event.target.value;
                                        setMensagem(valor);
                                    },
                                    onKeyPress: (event)=>{
                                        if (event.key === 'Enter') {
                                            event.preventDefault();
                                            handleNovaMensagem(mensagem1);
                                        }
                                    },
                                    placeholder: "Insira sua mensagem aqui...",
                                    type: "textarea",
                                    styleSheet: {
                                        border: '1px solid',
                                        borderColor: _config_json__WEBPACK_IMPORTED_MODULE_3__/* .theme.colors.primary[500] */ .r.O.T.pl,
                                        width: '100%',
                                        resize: 'none',
                                        borderRadius: '5px',
                                        padding: '6px 8px',
                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__/* .theme.colors.neutrals[800] */ .r.O.O.YY,
                                        marginRight: '12px',
                                        color: _config_json__WEBPACK_IMPORTED_MODULE_3__/* .theme.colors.neutrals[200] */ .r.O.O.Ug
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    onClick: (event)=>{
                                        event.preventDefault();
                                        handleNovaMensagem(mensagem1);
                                    },
                                    label: "Enviar",
                                    buttonColors: {
                                        contrastColor: _config_json__WEBPACK_IMPORTED_MODULE_3__/* .theme.colors.neutrals[999] */ .r.O.O.jh,
                                        mainColor: _config_json__WEBPACK_IMPORTED_MODULE_3__/* .theme.colors.primary[500] */ .r.O.T.pl,
                                        mainColorLight: _config_json__WEBPACK_IMPORTED_MODULE_3__/* .theme.colors.primary[400] */ .r.O.T.aD,
                                        mainColorStrong: _config_json__WEBPACK_IMPORTED_MODULE_3__/* .theme.colors.primary[600] */ .r.O.T.RW
                                    }
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
function Header() {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {
            styleSheet: {
                width: '100%',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
                    variant: "heading5",
                    children: "Chat"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                    variant: "tertiary",
                    colorVariant: "neutral",
                    label: "Logout",
                    href: "/"
                })
            ]
        })
    }));
}
function MessageList(props) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {
        tag: "ul",
        styleSheet: {
            overflow: 'scroll',
            display: 'flex',
            flexDirection: 'column-reverse',
            flex: 1,
            color: _config_json__WEBPACK_IMPORTED_MODULE_3__/* .theme.colors.neutrals["000"] */ .r.O.O.M6,
            marginBottom: '16px'
        },
        children: props.mensagem.map((mensagem)=>{
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
                tag: "li",
                styleSheet: {
                    borderRadius: '5px',
                    padding: '6px',
                    marginBottom: '12px',
                    hover: {
                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__/* .theme.colors.neutrals[700] */ .r.O.O.qy
                    }
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        styleSheet: {
                            marginBottom: '8px'
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                styleSheet: {
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    display: 'inline-block',
                                    marginRight: '8px'
                                },
                                src: `https://github.com/${mensagem.de}.png`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                tag: "strong",
                                children: mensagem.de
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                styleSheet: {
                                    fontSize: '10px',
                                    marginLeft: '8px',
                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__/* .theme.colors.neutrals[300] */ .r.O.O.wl
                                },
                                tag: "span",
                                children: new Date().toLocaleDateString()
                            })
                        ]
                    }),
                    mensagem.texto
                ]
            }, mensagem.id));
        })
    }));
}


/***/ }),

/***/ 181:
/***/ ((module) => {

module.exports = JSON.parse('{"r":{"O":{"T":{"aD":"#57AE5B","pl":"#489FB8","RW":"#0F4554"},"O":{"Ug":"#CBD2D9","wl":"#9AA5B1","qy":"#282C34","YY":"#181F25","H":"#101418","jh":"#080A0C","M6":"#CCCCCC"}}}}');

/***/ })

};
;
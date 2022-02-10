import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React from 'react';
import appConfig from '../config.json';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/router'



const SUPABASE_URL ='https://sorexwekduheaphbaste.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0Mzk4OTkwMSwiZXhwIjoxOTU5NTY1OTAxfQ.wlsa4lsvscYYMDHNkHYAkHO6KRwvNfILgscedWFDjEE'
const SUPABASE_CLIENT = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)


export default function ChatPage() {
    const roteamento = useRouter()
    const username = roteamento.query.username
    
    const [mensagem, setMensagem] = React.useState('')
    const [listaMensagens, SetListaMensagens] = React.useState([])
    React.useEffect(()=>{
        SUPABASE_CLIENT
        .from('mensagens_duplicate')
        .select('*')
        .order('id', { ascending: false })
        .then(({ data })=>{
            SetListaMensagens(data)
        })
    }, []) 

    function handleNovaMensagem(novaMensagem){{
            if(novaMensagem != '' && novaMensagem != ' ' && novaMensagem != '  '){
                const mensagem = {
                    de: username,
                    texto: novaMensagem,
                }
                SUPABASE_CLIENT
                    .from('mensagens_duplicate')
                    .insert([
                        mensagem
                    ])
                    .then(({ data })=>{
                        SetListaMensagens([
                            data[0],
                            ...listaMensagens  
                        ])
                    })


                setMensagem('')
            }else{
                setMensagem('')
            }
        }
    }
    return (
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: appConfig.theme.colors.primary['500'],
                backgroundColor: '#282C34',
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                color: appConfig.theme.colors.neutrals['000']
            }}
        >
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    borderRadius: '5px',
                    backgroundColor: appConfig.theme.colors.neutrals['700'],
                    height: '100%',
                    maxWidth: '95%',
                    maxHeight: '95vh',
                    padding: '32px',
                }}
            >
                <Header />
                <Box
                    styleSheet={{
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        height: '80%',
                        backgroundColor: appConfig.theme.colors.neutrals['900'],
                        flexDirection: 'column',
                        borderRadius: '5px',
                        border: '1px solid',
                        borderColor: appConfig.theme.colors.primary['500'],
                        padding: '16px',
                    }}
                >
                    
                    <MessageList mensagem={listaMensagens} username={username} />

                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <TextField
                            value={mensagem}
                            onChange={(event)=>{
                                const valor = event.target.value
                                setMensagem(valor)

                            }}
                            onKeyPress={(event)=>{
                                if(event.key === 'Enter'){
                                    event.preventDefault()
                                    handleNovaMensagem(mensagem)
                                }
                            }}
                            placeholder="Insira sua mensagem aqui..."
                            type="textarea"
                            styleSheet={{
                                border: '1px solid',
                                borderColor: appConfig.theme.colors.primary['500'],
                                width: '100%',
                                resize: 'none',
                                borderRadius: '5px',
                                padding: '6px 8px',
                                backgroundColor: appConfig.theme.colors.neutrals[800],
                                marginRight: '12px',
                                color: appConfig.theme.colors.neutrals[200],
                            }}
                        />
                        <Button 
                            onClick={(event)=>{
                                    event.preventDefault()
                                    handleNovaMensagem(mensagem)
                            }}
                            label='Enviar'
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["999"],
                                mainColor: appConfig.theme.colors.primary['500'],
                                mainColorLight: appConfig.theme.colors.primary['400'],
                                mainColorStrong: appConfig.theme.colors.primary['600'],
                              }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

function Header() {
    return (
        <>
            <Box styleSheet={{ width: '100%', 
            marginBottom: '16px', 
            display: 'flex', alignItems: 'center', 
            justifyContent: 'space-between' }} >
                <Text variant='heading5'>
                    Chat
                </Text>
                <Button
                    variant='tertiary'
                    colorVariant='neutral'
                    label='Logout'
                    href="/"
                />
            </Box>
        </>
    )
}

function MessageList(props) {
    return (
        <Box
            tag="ul"
            styleSheet={{
                overflow: 'scroll',
                display: 'flex',
                flexDirection: 'column-reverse',
                flex: 1,
                color: appConfig.theme.colors.neutrals["000"],
                marginBottom: '16px',
            }}
        >


            {/* CAIXA DE MSG */}
            {props.mensagem.map((mensagem)=>{
                return(
                <Box styleSheet={{justifyContent:'center', flexDirection:'row',hover: {
                    backgroundColor: appConfig.theme.colors.neutrals[700], padding:'10px'
                }}}>
                    <Image
                        styleSheet={{
                            width: '20px',
                            height: '20px', 
                            borderRadius: '50%',
                            marginRight: '8px',
                        }}  
                        src={`https://github.com/${mensagem.de}.png`}
                    />
                    <Text
                        key={mensagem.id}
                        tag="li"
                        styleSheet={{
                            borderRadius: '5px',
                            padding: '6px',
                            marginBottom: '12px',
                        }}
                    >
                        <Box
                            styleSheet={{
                                marginBottom: '8px',
                            }}
                        >
                            <Text tag="strong">
                                {mensagem.de}
                            </Text>
                            <Text
                                styleSheet={{
                                    fontSize: '10px',
                                    marginLeft: '8px',
                                    color: appConfig.theme.colors.neutrals[300],
                                }}
                                tag="span"
                            >
                                {(new Date().toLocaleDateString())}
                            </Text>
                        </Box>
                        {mensagem.texto}
                    </Text>
                </Box>
                )})}
            
        </Box>
        
    )
    
}
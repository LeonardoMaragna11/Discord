import appConfig from '../config.json'
import {Box, Button, Text, TextField, Image} from '@skynexui/components'
import React from 'react';
import { useRouter } from 'next/router'
import ChatPage from './chat';

function Titulo(props) {
  const Tag = props.tag;
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag}{
          color: ${appConfig.theme.colors.neutrals['000']}; 
          font-size: 24px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}

function PaginaInicial() {
  const [username, setUsername] = React.useState('React')
  const roteamento = useRouter()
  const [foto, setFoto] = React.useState('https://scontent.fcpq5-1.fna.fbcdn.net/v/t1.6435-9/68674298_107083210661769_2811881768334917632_n.png?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHlDhC-Wcwe5sq51suKYUpTtOiF651XHma06IXrnVceZhi0gukWo1pXkjrgIqN9JdLsdFE-0Uc9akSQjb3GLotI&_nc_ohc=Z9_tqXnPYesAX9xhoAE&_nc_ht=scontent.fcpq5-1.fna&oh=00_AT_PpsuotoT7EoaFaG1PmXXXvvfPmjAw6Vb6Z1aZNLMzng&oe=62248DA2')

  return (
    <>
      <Box
        styleSheet={{
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.primary['500'],
          backgroundColor: '#282C34',
          backgroundRepeat: 'no-repeat',
           backgroundSize: 'cover', 
           backgroundBlendMode: 'multiply',
        }} 
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', 
            maxWidth: '700px',
            borderRadius: '5px',
            padding: '32px', 
            margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.neutrals['700'],
            borderRadius: '10px'
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function(infosDoEvento){
                infosDoEvento.preventDefault()
                if(username != '' && username != ' ' && username != '  ' && username != 'React'){
                  roteamento.push(`/chat?username=${username}`)
                }else{
                  alert('Insira um nome valido')
                }
            }}
            styleSheet={{
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, 
              textAlign: 'center', 
              marginBottom: '32px',
            }}
          >
            <Titulo tag="h2">Boas vindas de volta!</Titulo>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals['300'] }}>
              {`Olá, ${username}`}
            </Text>
            <TextField
            placeholder={username}
            onChange={function(event){
                if(event.target.value != ''){
                  const valor = event.target.value
                  setUsername(valor)
                  setFoto(`https://github.com/${valor}.png`)
                }else{
                  setUsername('React')
                  setFoto('https://scontent.fcpq5-1.fna.fbcdn.net/v/t1.6435-9/68674298_107083210661769_2811881768334917632_n.png?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHlDhC-Wcwe5sq51suKYUpTtOiF651XHma06IXrnVceZhi0gukWo1pXkjrgIqN9JdLsdFE-0Uc9akSQjb3GLotI&_nc_ohc=Z9_tqXnPYesAX9xhoAE&_nc_ht=scontent.fcpq5-1.fna&oh=00_AT_PpsuotoT7EoaFaG1PmXXXvvfPmjAw6Vb6Z1aZNLMzng&oe=62248DA2')
                }
            }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals['200'], // Color
                  mainColor: appConfig.theme.colors.primary['600'], // borda
                  mainColorHighlight: appConfig.theme.colors.primary['500'], // :hover
                  backgroundColor: appConfig.theme.colors.neutrals['800'], // background-color
                },
              }}
            />
            <Button
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["999"],
                mainColor: appConfig.theme.colors.primary['500'],
                mainColorLight: appConfig.theme.colors.primary['400'],
                mainColorStrong: appConfig.theme.colors.primary['600'],
              }}
            />

          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
                border: 'solid 2px',
                borderColor: appConfig.theme.colors.neutrals['999']
              }}
              src={foto}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
          
        </Box>
      </Box>
    </>
  );
}
export default PaginaInicial
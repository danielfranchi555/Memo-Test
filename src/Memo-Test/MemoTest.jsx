import { Button, Center, Grid, GridItem, Image, Stack, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
 
const images = ['https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor',
               'https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor',
               'https://icongr.am/devicon/chrome-original.svg?size=128&color=currentColor',
               'https://icongr.am/devicon/react-original.svg?size=128&color=currentColor',
               'https://icongr.am/devicon/java-original.svg?size=128&color=currentColor',
               'https://icongr.am/devicon/typescript-original.svg?size=128&tolor=currentColor',
               'https://icongr.am/devicon/css3-original.svg?size=108&color=currentColor',
               'https://icongr.am/devicon/firefox-original.svg?size=108&color=currentColor',
               'https://icongr.am/devicon/git-original.svg?size=108&color=currentColor',
               "https://icongr.am/devicon/nodejs-original.svg?size=108&color=currentColor",
            ].flatMap(image => [`a|${image}`,`b|${image}`]).sort(()=>Math.random() - 0.5)


export const MemoTest = () => {
    const [success,setSuccess]=useState([])
    const [selected,setSelected]=useState([])



    const handleClick = (item) =>{
        if(selected.length < 2){
            setSelected((selected)=>selected.concat(item))
        }
    
    }

  const reset = ()=>{
    setSuccess([])
  }

 useEffect(()=>{
   if(selected.length === 2){
    if(selected[0].split("|")[1] === selected[1].split("|")[1]){
           setSuccess((success)=>success.concat(selected))
     }
    setTimeout(()=>setSelected([]),1000)
   }
 },[selected])



 useEffect(()=>{
   if(success.length === images.length){
    alert('ganaste')
    setSuccess([])
   }
 },[success])





  return (
    <Stack  justify='center' h='600px' align='center' >
        <Stack>
            <Text color='Black' fontSize='40px'>Memo test</Text>
        </Stack>
            <Grid templateColumns='repeat(4, 70px)'  gap={1}>
         {images.map((item)=>{
              const [ ,url] = item.split("|")
            return(
                <GridItem cursor='pointer'  onClick={()=>handleClick(item)} key={item} p={1}>
                  {selected.includes(item) || success.includes(item)?
                  <Image  boxShadow='base' p='0' rounded='md' bg='white'  src={url} w={{base:'70px',md:'200px'}} alt="" /> 
                  :
                  <Image  boxShadow='base' p='5' rounded='md' bg='white'  key={item} src="https://icongr.am/clarity/cursor-hand-click.svg?size=100&color=currentColor" alt="" />
                  }
                    </GridItem>
            )
        })}
         
  </Grid>
  <Stack justify='center' align='center'>
         <Button onClick={()=>reset()} w='200px'>Volver a Empezar</Button>
         </Stack>
    </Stack>

  )
}

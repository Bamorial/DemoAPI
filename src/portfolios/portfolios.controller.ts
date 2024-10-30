import { Body, Controller, Delete, Get, Param, Post, Put, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Portfolio } from 'src/models/Portfolio';

@Controller('portfolios')
export class PortfoliosController {
    portfolios: Portfolio[]=[]
    image: any

    @Get()
    getAll(@Body() params?:any){
        if(params.title){
            console.log(params.title)
            let res= this.portfolios.filter((el)=>{
                if(el.title==params.title)
                    return el
            })
            console.log(res)
            return res
        }
        else{
            console.log('no title')
            return this.portfolios
        }
    }

    @Post()
    addNewPortfolio(@Body() params?:any) 
    {
        this.portfolios.push({id: params.id, title: params.title, description: params.description, isVisible: params.isVisible, image: params.image, link: params.link})
    }
    @Delete()
    removePortfolio(@Body() params?:any) 
    {
        this.portfolios.splice(this.portfolios.indexOf(this.portfolios.filter(el=>{
            if(el.title==params.title)
                return el
        })[0]),1)
        return this.portfolios
    }
    @Put()
    updatePortfolio(@Body() params?:any) 
    {
        this.portfolios[this.portfolios.indexOf(this.portfolios.filter(el=>{
            if(el.title==params.title)
                return el
        })[0])]={ title:params.title, description: params.description, image: params.image, isVisible: params.isVisible}
        return this.portfolios
    }
}

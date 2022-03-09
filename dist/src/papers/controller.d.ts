import { PapersService } from './papers.service';
import { CreatePaperDto } from './dto/create-paper.dto';
import { UpdatePaperDto } from './dto/update-paper.dto';
export declare class PapersController {
    private readonly papersService;
    constructor(papersService: PapersService);
    create(createPaperDto: CreatePaperDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updatePaperDto: UpdatePaperDto): any;
    remove(id: string): any;
}

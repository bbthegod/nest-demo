import { AsdasdasdsService } from './asdasdasds.service';
import { CreateAsdasdasdDto } from './dto/create-asdasdasd.dto';
import { UpdateAsdasdasdDto } from './dto/update-asdasdasd.dto';
export declare class AsdasdasdsController {
    private readonly asdasdasdsService;
    constructor(asdasdasdsService: AsdasdasdsService);
    create(createAsdasdasdDto: CreateAsdasdasdDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateAsdasdasdDto: UpdateAsdasdasdDto): any;
    remove(id: string): any;
}

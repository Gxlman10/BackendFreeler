import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, Min } from 'class-validator';

export class AssignLeadDto {
  @ApiProperty({ example: 1, description: 'ID del lead' })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  leadId!: number;

  @ApiProperty({
    example: 100,
    description: 'Actor: usuario empresa que realiza la asignación',
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  usuarioEmpresaId!: number;

  @ApiProperty({
    example: 101,
    description: 'Usuario empresa al que se asigna el lead',
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  asignarAUsuarioEmpresaId!: number;
}

export default AssignLeadDto;

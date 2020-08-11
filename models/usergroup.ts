
export type Permission = 'READ' | 'WRITE' | 'DELETE' | 'SHARE' | 'UPLOAD_FILES';

export interface UserGroup{
    id: string ;
    name : string;
    permissions : Array<Permission>
}
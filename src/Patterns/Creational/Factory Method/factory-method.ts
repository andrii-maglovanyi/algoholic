export enum TEACHER_TYPE {
  CODING = "coding",
  MUSIC = "music",
}

interface TeacherProperties {
  name: string;
}

export interface CodingTeacherProperties extends TeacherProperties {
  programmingLanguage: string;
}

export interface MusicTeacherProperties extends TeacherProperties {
  instrument: string;
}

export class Teacher {
  public name: string;

  constructor(properties: TeacherProperties) {
    this.name = properties.name;
  }
}

export class CodingTeacher extends Teacher {
  public programmingLanguage: string;

  constructor(properties: CodingTeacherProperties) {
    super(properties);
    this.programmingLanguage = properties.programmingLanguage;
  }
}

export class MusicTeacher extends Teacher {
  public instrument: string;

  constructor(properties: MusicTeacherProperties) {
    super(properties);
    this.instrument = properties.instrument;
  }
}

export class TeacherFactory {
  public static getTeacher(
    type: TEACHER_TYPE.CODING,
    properties: CodingTeacherProperties
  ): CodingTeacher;
  public static getTeacher(
    type: TEACHER_TYPE.MUSIC,
    properties: MusicTeacherProperties
  ): MusicTeacher;
  public static getTeacher(
    type: TEACHER_TYPE,
    properties: CodingTeacherProperties & MusicTeacherProperties
  ) {
    switch (type) {
      case TEACHER_TYPE.CODING:
        return new CodingTeacher(properties);
      case TEACHER_TYPE.MUSIC:
        return new MusicTeacher(properties);
      default:
        throw new Error("Wrong teacher type chosen");
    }
  }
}

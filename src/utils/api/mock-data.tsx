import { QuestionCardType } from "../../components/QuestionCard/type";

export const questionMock: QuestionCardType[] = [
  {
    id: 1,
    title:
      "ไม่ควรบันทึกรหัสผ่านไว้ในโทรศัพท์ เพื่อความสะดวกในการใช้งานใช่หรือไม่",
    description: "คำถามที่1",
    type: 1,
    option: [
      { label: "ใช่", value: "ใช่" },
      { label: "ไม่ใช่", value: "ไม่ใช่" },
    ],
  },
  {
    id: 2,
    title: "ไม่ควรลงแอปพลิเคชันจากลิงก์ที่ผู้อื่นส่งมาให้ใช่หรือไม่",
    description: "คำถามที่2",
    type: 1,
    option: [
      { label: "ใช่", value: "ใช่" },
      { label: "ไม่ใช่", value: "ไม่ใช่" },
    ],
  },
  {
    id: 3,
    title: "ควรอัปเดตซอฟต์แวร์ของโทรศัพท์มือถือเป็นประจำใช่หรือไม่",
    description: "คำถามที่3",
    type: 1,
    option: [
      { label: "ใช่", value: "ใช่" },
      { label: "ไม่ใช่", value: "ไม่ใช่" },
    ],
  },
  // {
  //   id: 4,
  //   title: "คำถามที่4",
  //   description: "คำถามที่3",
  //   type: 1,
  //   option: [
  //     { label: "ใช่", value: "ใช่" },
  //     { label: "ไม่ใช่", value: "ไม่ใช่" },
  //   ],
  // },
  // {
  //   id: 5,
  //   title: "คำถามที่5",
  //   description: "คำถามที่3",
  //   type: 1,
  //   option: [
  //     { label: "ใช่", value: "ใช่" },
  //     { label: "ไม่ใช่", value: "ไม่ใช่" },
  //   ],
  // },
];

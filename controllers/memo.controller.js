import { getmemo } from "../services/memo.service.js";

export const getResult = async (req, res, next) => {
  try {
    const result = await getmemo({});
    return res.status(200).json({
     status: 200,
     result: result,
     message: "完了　メモ"
   });

  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
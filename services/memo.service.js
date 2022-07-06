import require from "request";
 
 export const getmemo = async (query) => {
  
 try {
  return { yourHand: query.myhand, comHand: "グー", result: "テスト中" };

 }catch (e) {
  throw Error("Error while getting Omikuji.");
}
};


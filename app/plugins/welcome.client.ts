export default defineNuxtPlugin(() => {
  try {
    console.info(
      `
              %ckkkkkkkkkkkkkkkkkkkkkkkk
          dkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
       bkkkkkkkkkkkkkkkkkkkk      kbk kkkkkkk
     kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk  kkbkkkh
    kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkh  kkbbbkka
  hkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk   kkkkkbkk
 bkbkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk      bkkkkk
dkbkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk   kkkkk  kkk
kkkkkkkkkkkkkkkkkkkkkkkkkhkkkkkkkkkkkkh  kkkkkkkkh k
kkkkkkkkkkkkkkkkkkkkkkk hkkkkkkkkkkkkk   kkkkkkkbkk
kkkkkkkkkkkkkkkkkkkkkk  kbkkkkkkkkbkk   kkkkkkkkkbkk
kkkkkkkkkkkkkkkkkkkkkk  kkkbkkkbkkkk   kkkkkkkkkkkkk
kkkkkkkkkkkkkkkkkkkkkk   hkkkkkkkk  bkkkkkkkkkkkkkkk
kkkkkkkkkkkkkkkkkkkkkkkkk        kkkkkkkkkkkkkkkkkkk
bkbkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
 kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
  akkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkbkk
    kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkbkkk
      kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
        kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
           kkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
               kkkkkkkkkkkkkkkkkkkkkk
`,
      "color: red;"
    );

    console.info(
      "%c浙工大精弘网络欢迎您",
      "font-size: 20px; color: #fff; border-radius: 5px; padding: 10px 25px;background: linear-gradient(315deg, #cdb4db 0%, #ffafcc 50%, #a2d2ff 100%)"
    );
  } catch (error) {
    console.error("[Welcome Plugin] Error displaying welcome message:", error);
  }
});

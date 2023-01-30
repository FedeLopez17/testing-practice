import caesarCipher from "./caesar-cipher";

test("ciphers strings with positive numbers as shift factors", () => {
  expect(
    caesarCipher("abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZ", 6)
  ).toBe("ghijklmnopqrstuvwxyzabdefGHIJKLMNOPQRSTUVWXYZABDEF");
  expect(caesarCipher("Hello, world!", 4)).toBe("Lipps, asvph!");
  expect(
    caesarCipher(
      "Ever had an Oreo crumble and fall apart when you dip it in milk?",
      13
    )
  ).toBe("Rire unq na Berb pehzoyr naq snyy ncneg jura lbh qvc vg va zvyx?");
});

test("ciphers strings with negative numbers as shift factors", () => {
  expect(
    caesarCipher("abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZ", -6)
  ).toBe("uvwxyzabcdefghijklmnoprstUVWXYZABCDEFGHIJKLMNOPRST");
  expect(
    caesarCipher(
      "We're no strangers to love, you know the rules and so do I.",
      -7
    )
  ).toBe("Px'kx gh lmktgzxkl mh ehox, rhn dghp max knexl tgw lh wh B.");
  expect(
    caesarCipher(
      "The maned wolf (Chrysocyon brachyurus) is a large canine of South America. Its markings resemble those of foxes, but it is neither a fox nor a wolf.",
      -17
    )
  ).toBe(
    "Cqn vjwnm fxuo (Lqahbxlhxw kajlqhdadb) rb j ujapn ljwrwn xo Bxdcq Jvnarlj. Rcb vjatrwpb anbnvkun cqxbn xo oxgnb, kdc rc rb wnrcqna j oxg wxa j fxuo."
  );
});

test("Don't provide arguments to get an error", () => {
  expect(() => caesarCipher()).toThrow(Error);
  expect(() => caesarCipher("Hello!")).toThrow(Error);
  expect(() => caesarCipher(null, 6)).toThrow(Error);
});



const firstChatToUpperCase = (val: string) =>
  (val && val[0].toUpperCase() + val.slice(1, val.length)) || "";

export const formatKey = (key: string):{upKey: string;lowKey: string;originKey:string} => {
  return {
    upKey: firstChatToUpperCase(key),
    lowKey: key,
    originKey: key
  }
}

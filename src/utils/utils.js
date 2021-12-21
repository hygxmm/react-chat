export const createLinkmanId = (uid, uid2) => {
  if (uid < uid2) {
    return uuid + uid2;
  }
  return uid2 + uid;
};

const emailRegEx = new RegExp(
  //đưa vào đây 1 RegEx
  /^[\W-/.]+@([\W-]+\.)+[\W-]{2,4}$/g
);

export default function validateEmail(email) {
  return emailRegEx.test(email);
}

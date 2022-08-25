export default function contactContent() {
  let content = document.createElement('div');
  content.id = ('content');
  let container = document.createElement('div');
  let intro = document.createElement('div');
  let phone = document.createElement('div');
  let email = document.createElement('div');
  let address = document.createElement('div');
  container.id = 'contact';

  intro.innerText = 'Questions? Contact us.';
  intro.id = 'intro';
  phone.innerText = '+1 (123) 456-7890';
  email.innerText = 'restaurant@example.com';
  address.innerText = '12345 Molly Ln, Seattle, 67890';
  container.append(intro, phone, email, address);
  content.append(container);
  return content;
}

Starting learing React on 06.03.2023
React Component bir buton da olabilir bir sayfanın tamamı da olabilir.

JSX is stricter than HTML. You have to close tags like <br />. Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper:


--------
From scratch
run npx create-react-att [APP_NAME]

Edit src/App.js

Add some components
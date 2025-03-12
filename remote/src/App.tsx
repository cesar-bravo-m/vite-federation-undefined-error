import React from 'react';

const ListItem = ({ text }: { text: string }) => (
  <li>
    {text}
  </li>
);

const ListWrapper = ({ children }: { children: React.ReactNode }) => {
  const childrenArray = React.Children.toArray(children);
  return (
    <ul>
      {childrenArray}
    </ul>
  );
};

function App() {
  const items = [
    { id: 1, text: "Item One" },
    { id: 2, text: "Item Two" },
    { id: 3, text: "Item Three" },
    { id: 4, text: "Item Four" },
    { id: 5, text: "Item Five" }
  ];

  return (
    <div>
      <ListWrapper>
        {items.map(item => (
          <ListItem 
            key={item.id}
            text={item.text}
          />
        ))}
      </ListWrapper>
    </div>
  );
}

export default App;

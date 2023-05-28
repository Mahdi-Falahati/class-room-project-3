import List from "@mui/material/List";
import PersonInfo from "./PersonInfo";

export default function OwnerContent() {
  const deleteHandler = (id) => {
    console.log(fakeData.filter((person) => person.id !== id));
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {fakeData?.map((info, index) => (
        <PersonInfo
          key={index}
          OnDelete={deleteHandler}
          Name={info.name}
          ID={info.id}
        />
      ))}
    </List>
  );
}

const fakeData = [
  { name: "RC", id: "1" },
  { name: "Mahdi", id: "2" },
  { name: "Fateme", id: "3" },
  { name: "Vesal", id: "4" },
];

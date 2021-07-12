import React from "react";
import { View } from "react-native";
import Divider from "../components/Divider";
import SectionHeader from "../components/SectionHeader";
import SubComponents from "../components/SubComponents";

const ListGroup = ({ items, header }) => (
  <View>
    <SectionHeader title={header} />
    <View style={{ backgroundColor: "white" }}>
      <Divider bgColor="#D0D0D0" length="long" />

      {items.map((e, i) => {
        const last = items.length - 1;
        return (
          <>
            <SubComponents
              key={e + i.toString()}
              title={e.label}
              onPress={e.onPress}
            />
            {i !== last && <Divider bgColor="lightgray" length="short" />}
          </>
        );
      })}
      <Divider bgColor="#D0D0D0" length="long" />
    </View>
  </View>
);

export default ListGroup;

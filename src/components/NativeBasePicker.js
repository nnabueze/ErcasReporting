import { Form, Icon, Item, Picker } from "native-base";
import React from "react";
import { useState } from "react";

const NativeBasePicker = () => {
  const [select, setSelect] = useState("");
  const onSelect = (e) => {
    setSelect(e.terget.value);
  };
  return (
    <Form>
      <Item picker>
        <Picker
          mode="dropdown"
          iosIcon={<Icon name="arrow-down" />}
          style={{ width: undefined }}
          placeholder="Select your SIM"
          placeholderStyle={{ color: "#bfc6ea" }}
          placeholderIconColor="#007aff"
          selectedValue={select}
          onValueChange={(e) => onSelect(e)}
        >
          <Picker.Item label="Wallet" value="key0" />
          <Picker.Item label="ATM Card" value="key1" />
          <Picker.Item label="Debit Card" value="key2" />
          <Picker.Item label="Credit Card" value="key3" />
          <Picker.Item label="Net Banking" value="key4" />
        </Picker>
      </Item>
    </Form>
  );
};

export default NativeBasePicker;

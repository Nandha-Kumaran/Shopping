import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import * as Location from "expo-location";
import CategoryPickerItem from "../components/CategoryPickerItem";


import {
  AppForm as Form,
  AppFormField,
  AppFormField as FormField,
  AppFormPicker,
  SubmitButton,
  FormImagePicker,
} from "../components/forms";
import Screen from "../components/Screen";
import colors from "../Config/colors";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please Select al least one Image.")
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: colors.danger, icon:"floor-lamp" },
  { label: "Clothing", value: 2 ,backgroundColor: '#26de81', icon:"shoe-heel"},
  { label: "Camera", value: 3 ,backgroundColor: '#fed330', icon:"camera"},
  { label: "Games", value: 4 ,backgroundColor: '#26de81', icon:"cards"},
  { label: "Sports", value: 8 ,backgroundColor: '#778ca3', icon:"basketball"},
  { label: "Books", value: 9 ,backgroundColor: '#a55eea', icon:"book"},
  { label: "Movies & Music", value: 10 ,backgroundColor: 'blue', icon:"headphones"},
  { label: "Cars", value: 11 ,backgroundColor: '#fd9644', icon:"car"},
];

function ListingEditScreen() {
 const location = useLocation();

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images:[],
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker 
        items={categories} 
        name="category"
        numberOfColumns={3}
        //PickerItemComponent={CategoryPickerItem} 
        placeholder="Category" 
        width="50%" 
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;

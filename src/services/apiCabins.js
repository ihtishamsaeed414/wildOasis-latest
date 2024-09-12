import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

// resuable function for creating and editing cabins both
export async function createEditCabin(newCabin, id) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1: creating/editing a cabin, data that is recieved from the supabase
  let query = supabase.from("cabins");

  // A) CREATE
  if (!id)
    query
      .insert([{ ...newCabin, image: imagePath }])
      .select()
      .single();

  if (id) query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }
  // export async function createCabin(newCabin) {
  //   const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
  //     "/",
  //     ""
  //   );
  //   const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //   // creating a cabin
  //   // data that is recieved from the supabase
  //   const { data, error } = await supabase
  //     .from("cabins")
  //     .insert([{ ...newCabin, image: imagePath }])
  //     .select()
  //     .single();

  //   if (error) {
  //     console.error(error);
  //     throw new Error("Cabin could not be created");
  //   }

  // upload image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // delete the cabin if there was an error uploading image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }

  return data;
}
export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }
  return data;
}

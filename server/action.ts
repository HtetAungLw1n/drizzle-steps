"use server";

import { revalidatePath } from "next/cache";
import { db } from ".";
import { steps } from "./schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export const getSteps = async () => {
  const data = await db.query.steps.findMany();

  if (!data) {
    return { error: "no list" };
  }

  return { success: data };
};

export const getStep = async (id: number) => {
  const step = await db.query.steps.findFirst({
    where: eq(steps.id, id),
  });

  if (!step) {
    return { error: "Wrong step" };
  }

  return { success: step };
};

export const createStep = async (formData: FormData) => {
  const title = formData.get("title")?.toString();
  const description = formData.get("description")?.toString();

  if (!title || !description) {
    return { error: "no title" };
  }

  await db.insert(steps).values({ title, description });
  revalidatePath("/");
  redirect("/");
};

export const deleteStep = async (formData: FormData) => {
  const id = Number(formData.get("id"));

  if (!id) {
    return { error: "worng id" };
  }

  await db.delete(steps).where(eq(steps.id, id));
  revalidatePath("/");
  redirect("/");
};

export const updateStep = async (formData: FormData) => {
  const id = Number(formData.get("id"));
  const title = formData.get("title")?.toString();
  const description = formData.get("description")?.toString();

  if (!id || !title || !description) {
    return { error: "Invaild data" };
  }

  await db.update(steps).set({ title, description }).where(eq(steps.id, id));
  revalidatePath("/");
  redirect("/");
};

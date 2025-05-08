import { getSteps } from "@/server/action";
import Step from "./components/Step";

export default async function Home() {
  const { success, error } = await getSteps();

  return (
    <div>
      <div className="w-full h-32 text-center text-5xl mt-10">
        Each Step Define You
      </div>

      <div className="px-4 lg:px-0 container mx-auto">
        {success?.length === 0 && <p>No steps to show.</p>}
        {success &&
          success
            .reverse()
            .map((step) => (
              <Step
                key={step.id}
                id={step.id}
                title={step.title}
                description={step.description}
              />
            ))}
      </div>
    </div>
  );
}

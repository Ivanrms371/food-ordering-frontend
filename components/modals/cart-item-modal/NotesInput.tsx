import { ElementAnimated } from "@components/animated/ElementAnimated";
import { TextBlockAnimated } from "@components/animated/TextBlockAnimated";

export const NotesInput = () => {
  return (
    <div className="mt-6 flex flex-col gap-2">
      <TextBlockAnimated
        initial={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <label htmlFor="notes" className="font-medium text-gray-500">
          Add an instruction
        </label>
      </TextBlockAnimated>
      <ElementAnimated
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <textarea
          name="notes"
          id="notes"
          placeholder="Ej: not raw please"
          className="textarea-form"
        ></textarea>
      </ElementAnimated>
    </div>
  );
};

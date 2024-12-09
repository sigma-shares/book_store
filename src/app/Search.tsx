import { TextField } from "@radix-ui/themes";
import { AlertDialog } from "@radix-ui/themes";

export default function Search() {
  return (
    <AlertDialog.Root>
      <AlertDialog.Content>
        <TextField.Root placeholder="I am looking for..."></TextField.Root>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}

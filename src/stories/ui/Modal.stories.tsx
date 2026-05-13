import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import {
  Button,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseTrigger,
  ModalContainer,
  ModalDialog,
  ModalFooter,
  ModalHeader,
  ModalHeading,
  ModalTrigger,
} from '@ui';

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal',
  component: Modal,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => (
    <Modal>
      <ModalTrigger>
        <Button>Open modal</Button>
      </ModalTrigger>
      <ModalBackdrop>
        <ModalContainer>
          <ModalDialog>
            <ModalHeader>
              <ModalHeading>Confirm action</ModalHeading>
            </ModalHeader>
            <ModalBody>Are you sure you want to proceed? This cannot be undone.</ModalBody>
            <ModalFooter className="justify-end gap-2">
              <ModalCloseTrigger>
                <Button variant="ghost">Cancel</Button>
              </ModalCloseTrigger>
              <ModalCloseTrigger>
                <Button variant="danger">Delete</Button>
              </ModalCloseTrigger>
            </ModalFooter>
          </ModalDialog>
        </ModalContainer>
      </ModalBackdrop>
    </Modal>
  ),
};
